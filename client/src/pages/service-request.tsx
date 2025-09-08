import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

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
    
    if (!recaptchaToken) {
      setSubmitStatus({
        success: false,
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your support request has been submitted successfully! We will get back to you soon.'
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
      
      // Redirect after delay
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to submit your request. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Service Request</h1>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to submit a service request or inquiry. Our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form - Left Side */}
            <div className="w-full lg:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {submitStatus && (
                  <div className={`p-4 rounded ${
                    submitStatus.success 
                      ? 'bg-green-900/30 border border-green-500' 
                      : 'bg-red-900/30 border border-red-500'
                  }`}>
                    <p className="text-white">{submitStatus.message}</p>
                  </div>
                )}

                <div className="space-y-8 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="w-full">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-base bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-base bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="w-full">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-base bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="isCustomer" className="block text-sm font-medium text-gray-300 mb-2">
                        Are you an existing customer? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-4 pt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isCustomer"
                            value="yes"
                            checked={formData.isCustomer === 'yes'}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                            required
                          />
                          <span className="ml-2 text-gray-300">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isCustomer"
                            value="no"
                            checked={formData.isCustomer === 'no'}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                            required
                          />
                          <span className="ml-2 text-gray-300">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="font-medium text-gray-300">
                        I agree to the <a href="/terms" className="text-blue-400 hover:text-blue-300">Terms and Conditions</a> and <a href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a> <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full pt-4">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                        className="recaptcha"
                      />
                    </div>
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.agreeTerms || !recaptchaToken}
                        className="px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : 'Submit Request'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information - Right Side */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+675 325 2025</p>
                    <p className="text-gray-300">+675 311 2020</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">enquiry@nextgenpng.net</p>
                    <p className="text-gray-300">support@nextgenpng.net</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">
                      Mutual Rumana Building<br />
                      Section 405, Lot 12 & 13<br />
                      Waigani, Port Moresby<br />
                      National Capital District, PNG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Need Immediate Assistance?</h4>
                <p className="text-gray-300 mb-4">
                  Our support team is available during business hours to assist you with any questions or issues.
                </p>
                <a 
                  href="tel:+6753252025" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
