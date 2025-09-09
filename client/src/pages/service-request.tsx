import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import { submitServiceRequest } from "../services/api";

export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    isCustomer: '',
    subject: '',
    message: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    requestId?: string;
  } | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      setSubmitStatus({
        success: false,
        message: 'Please agree to the Terms & Privacy policy.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Submit to backend API
      const response = await submitServiceRequest({
        ...formData,
        isCustomer: formData.isCustomer as 'yes' | 'no'
      });
      
      setSubmitStatus({
        success: true,
        message: 'Your support request has been submitted successfully!',
        requestId: response?.data?.id
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        isCustomer: '',
        subject: '',
        message: '',
        agreeTerms: false
      });
      
      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
      // Redirect to home page after 5 seconds
      setTimeout(() => navigate('/'), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit your request. Please try again later.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 py-4 px-3 sm:px-4 max-w-5xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-white">Service Request</h1>
          <p className="mt-1 text-sm text-gray-400 max-w-md mx-auto">
            Submit your request and we'll get back to you shortly.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-4">
              <form onSubmit={handleSubmit} className="space-y-3">
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {submitStatus.success ? (
                          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm font-medium ${
                          submitStatus.success ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {submitStatus.message}
                          {submitStatus.requestId && (
                            <span className="block mt-1 text-sm text-gray-600">
                              Request ID: {submitStatus.requestId}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-base bg-gray-700 border-0 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-base bg-gray-700 border-0 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-base bg-gray-700 border-0 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="isCustomer" className="block text-sm font-medium text-gray-300 mb-1">
                        Existing customer? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-4 mt-1">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isCustomer"
                            value="yes"
                            checked={formData.isCustomer === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                            required
                          />
                          <span className="ml-2 text-sm text-gray-300">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isCustomer"
                            value="no"
                            checked={formData.isCustomer === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                            required
                          />
                          <span className="ml-2 text-sm text-gray-300">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-base bg-gray-700 border-0 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="">Select your type of support request or enquiry...</option>
                      <option value="email-support">Email Support</option>
                      <option value="general-support">General Support Query</option>
                      <option value="hosting-query">Hosting Query/Signup</option>
                      <option value="domain-query">Domain Registration Query</option>
                      <option value="website-support">Website Support</option>
                      <option value="web-design">Web Design Query</option>
                      <option value="other">Other Query</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-base bg-gray-700 border-0 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Please provide details about your request..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-4 mt-0.5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-3.5 w-3.5 text-blue-500 focus:ring-blue-400 rounded"
                        required
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <label htmlFor="agreeTerms" className="text-gray-300">
                        I agree to the <a href="/terms" className="text-blue-400 hover:text-blue-300">Terms</a> & <a href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy</a> <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full pt-4">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                      {/* ReCAPTCHA temporarily disabled for testing
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                        className="recaptcha"
                        ref={recaptchaRef}
                      />
                      */}
                    </div>
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <div className="pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.agreeTerms}
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information - Right Side */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-4 text-white">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-0.5">Phone</h4>
                    <p className="text-sm text-gray-300">+675 325 2025</p>
                    <p className="text-sm text-gray-300">+675 311 2020</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-0.5">Email</h4>
                    <p className="text-sm text-gray-300">enquiry@nextgenpng.net</p>
                    <p className="text-sm text-gray-300">support@nextgenpng.net</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-0.5">Address</h4>
                    <p className="text-sm text-gray-300">
                      Mutual Rumana Building<br />
                      Section 405, Lot 12 & 13<br />
                      Waigani, Port Moresby<br />
                      NCD, PNG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-0.5">Business Hours</h4>
                    <p className="text-sm text-gray-300">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-300">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-gray-300">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
