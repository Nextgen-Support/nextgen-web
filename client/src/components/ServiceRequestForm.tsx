import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { submitServiceRequest } from '@/services/api';
import '@/utils/recaptcha';

// Define the form schema with Zod
const formSchema = z.object({
  contactName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  contactEmail: z.string().email({ message: 'Please enter a valid email address' }),
  contactPhone: z.string().min(1, { message: 'Phone number is required' }),
  currentCustomer: z.enum(['yes', 'no'] as const).refine(
    (val) => val === 'yes' || val === 'no',
    { message: 'Please select an option' }
  ),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  problem: z.string().min(10, { message: 'Please describe your problem in at least 10 characters' }),
  'g-recaptcha-response': z.string().min(1, { message: 'Please complete the reCAPTCHA' })
});

type FormValues = z.infer<typeof formSchema>;

interface ServiceRequestFormProps {
  onSuccess: () => void;
}

export function ServiceRequestForm({ onSuccess }: ServiceRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      currentCustomer: 'no',
      subject: '',
      problem: '',
      'g-recaptcha-response': '',
    },
  });

  // Load reCAPTCHA script
  useEffect(() => {
    // Only load if not already loaded
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      setRecaptchaLoaded(true);
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      const recaptchaResponse = data['g-recaptcha-response'];

      if (!recaptchaResponse) {
        throw new Error('Please complete the reCAPTCHA');
      }

      const { 'g-recaptcha-response': _, ...formData } = data;

      const response = await submitServiceRequest({
        ...formData,
        recaptchaToken: recaptchaResponse,
      });

      if (response.success) {
        toast.success('Service request submitted successfully!');
        reset();
        onSuccess();
      } else {
        throw new Error(response.message || 'Failed to submit service request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  // CSS classes for consistent styling
  const formInputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const formLabelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const errorClasses = "mt-1 text-sm text-red-600";

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Service Request</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Name */}
          <div className="mb-4">
            <label htmlFor="contactName" className={formLabelClasses}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contactName"
              type="text"
              className={`${formInputClasses} ${errors.contactName ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
              {...register('contactName')}
              placeholder="John Doe"
            />
            {errors.contactName && (
              <p className={errorClasses}>{errors.contactName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="contactEmail" className={formLabelClasses}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contactEmail"
              type="email"
              className={`${formInputClasses} ${errors.contactEmail ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
              {...register('contactEmail')}
              placeholder="email@example.com"
            />
            {errors.contactEmail && (
              <p className={errorClasses}>{errors.contactEmail.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="contactPhone" className={formLabelClasses}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="contactPhone"
              type="tel"
              className={`${formInputClasses} ${errors.contactPhone ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
              {...register('contactPhone')}
              placeholder="+1 (555) 123-4567"
            />
            {errors.contactPhone && (
              <p className={errorClasses}>{errors.contactPhone.message}</p>
            )}
          </div>

          {/* Current Customer */}
          <div className="mb-4">
            <p className={formLabelClasses}>
              Are you an existing customer? <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="yes"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                  {...register('currentCustomer')}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                  {...register('currentCustomer')}
                />
                <span>No</span>
              </label>
            </div>
            {errors.currentCustomer && (
              <p className={errorClasses}>{errors.currentCustomer.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className={formLabelClasses}>
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className={`${formInputClasses} ${errors.subject ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            {...register('subject')}
            placeholder="How can we help you?"
          />
          {errors.subject && (
            <p className={errorClasses}>{errors.subject.message}</p>
          )}
        </div>

        {/* Problem Description */}
        <div className="mb-4">
          <label htmlFor="problem" className={formLabelClasses}>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="problem"
            className={`${formInputClasses} min-h-[120px] ${errors.problem ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            {...register('problem')}
            placeholder="Please describe your problem in detail..."
          />
          {errors.problem && (
            <p className={errorClasses}>{errors.problem.message}</p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="mb-4">
          {recaptchaLoaded ? (
            <div 
              className="g-recaptcha" 
              data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              data-callback="onRecaptchaSuccess"
              data-expired-callback="onRecaptchaExpired"
              data-error-callback="onRecaptchaError"
            />
          ) : (
            <div className="text-sm text-yellow-600">
              Loading reCAPTCHA...
            </div>
          )}
          {errors['g-recaptcha-response'] && (
            <p className={errorClasses}>{errors['g-recaptcha-response'].message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          * Required fields. We'll get back to you as soon as possible.
        </p>
      </form>
    </div>
  );
}
