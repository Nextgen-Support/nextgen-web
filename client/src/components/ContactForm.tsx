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
    <div className="bg-gray-900 py-4 px-4 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-center text-white mb-4">
            Talk to our staff today!
          </h3>
          <form 
            ref={form}
            onSubmit={sendEmail}
            action="https://formsubmit.co/support3@nextgenpng.net"
            method="POST"
            className="space-y-3"
            noValidate
          >
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{display: 'none'}} />
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-gray-300 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
            </div>

            {/* Account Type and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="accountType" className="block text-sm font-medium text-gray-300 mb-1">
                  Account Type *
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">Select account type</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="education">Education</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              ></textarea>
            </div>

            {/* Submit Button   */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white font-medium rounded-md flex items-center justify-center space-x-2 transition-colors"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
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
