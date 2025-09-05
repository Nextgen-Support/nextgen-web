import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent any parent form submission or navigation
    if (e && e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }

    if (!form.current) {
      toast.error('Form reference is missing');
      return false;
    }

    try {
      setIsSubmitting(true);

      // Validate the form
      if (!form.current.checkValidity()) {
        form.current.reportValidity();
        return;
      }

      const formData = new FormData(form.current);
      
      // Add FormSubmit parameters
      const formValues = Object.fromEntries(formData.entries());
      const submissionData = {
        ...formValues,
        _subject: 'New contact form submission',
        _captcha: 'false',
        _template: 'table',
        _autoresponse: 'Thank you for contacting us! We will get back to you soon.'
      };
      
      // Send form data to FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/support3@nextgenpng.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden w-full">
        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Send us a message</h2>
          <form 
            ref={form}
            onSubmit={sendEmail}
            action="https://formsubmit.co/support3@nextgenpng.net"
            method="POST"
            className="space-y-6 w-full"
            noValidate
          >
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{display: 'none'}} />
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 text-sm bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 text-sm bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2.5 text-sm bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              <div className="w-full">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 text-sm bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white font-medium rounded-md flex items-center justify-center space-x-2 transition-colors"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="flex-shrink-0" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
