import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { submitServiceRequest } from '@/services/api';
import '@/utils/recaptcha'; // Import reCAPTCHA utilities

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  isCustomer: z.string().refine(
    (val) => val === 'yes' || val === 'no',
    { message: 'Please select an option' }
  ),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  'g-recaptcha-response': z.string().min(1, { message: 'Please complete the reCAPTCHA' })
});

type FormValues = z.infer<typeof formSchema>;

interface ServiceRequestFormProps {
  onSuccess: () => void;
}

export function ServiceRequestForm({ onSuccess }: ServiceRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    };
    
    loadRecaptcha();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      isCustomer: 'no',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      // Get the reCAPTCHA response
      const recaptchaResponse = values['g-recaptcha-response'];
      if (!recaptchaResponse) {
        throw new Error('Please complete the reCAPTCHA');
      }

      const requestData = {
        ...values,
        isCustomer: values.isCustomer as 'yes' | 'no',
        phone: values.phone || '',
        recaptchaToken: recaptchaResponse,
      };
      
      const response = await submitServiceRequest(requestData);

      if (response.success) {
        toast.success('Service request submitted successfully!');
        form.reset({
          name: '',
          email: '',
          phone: '',
          isCustomer: 'no',
          subject: '',
          message: '',
        });
        onSuccess();
      } else {
        throw new Error(response.message || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        error instanceof Error ? error.message : 'An error occurred while submitting the form'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Service Request</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isCustomer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you an existing customer? *</FormLabel>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="yes"
                        checked={field.value === 'yes'}
                        onChange={() => field.onChange('yes')}
                        className="h-4 w-4 text-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="no"
                        checked={field.value === 'no'}
                        onChange={() => field.onChange('no')}
                        className="h-4 w-4 text-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="How can we help you?"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide details about your request..."
                    className="min-h-[120px]"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>

          <div className="mt-4">
            {recaptchaLoaded && (
              <div 
                className="g-recaptcha" 
                data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                data-callback="onRecaptchaSuccess"
                data-expired-callback="onRecaptchaExpired"
                data-error-callback="onRecaptchaError"
              ></div>
            )}
            {form.formState.errors['g-recaptcha-response'] && (
              <p className="text-sm text-red-500 mt-2">
                {form.formState.errors['g-recaptcha-response'].message}
              </p>
            )}
            {!recaptchaLoaded && (
              <div className="text-sm text-yellow-600">
                Loading reCAPTCHA...
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            * Required fields. We'll get back to you as soon as possible.
          </p>
        </form>
      </Form>
    </div>
  );
}
