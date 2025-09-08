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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-green-400 mb-4">Contact Nextgen Technology</h1>
            <p className="text-gray-300 mb-6">
              Please fill in your details below and hit submit to submit a support request or general enquiry and we will endeavour to respond as soon as possible. 
              Alternatively, you can contact us using the details to the right.
            </p>
            <p className="text-sm text-gray-400 mb-2">Items with a <span className="text-red-500">*</span> are required.</p>
            <p className="text-sm text-gray-400 mb-6"><span className="text-red-500">*</span> Required fields</p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              {submitStatus && (
                <div className={`p-4 mb-6 rounded ${
                  submitStatus.success 
                    ? 'bg-green-900/30 border border-green-500' 
                    : 'bg-red-900/30 border border-red-500'
                }`}>
                  <p className="text-white">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Are you an existing Nextgen Technology customer? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="isCustomer"
                          value="yes"
                          checked={formData.isCustomer === 'yes'}
                          onChange={handleChange}
                          className="text-green-500 focus:ring-green-500"
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
                          className="text-green-500 focus:ring-green-500"
                          required
                        />
                        <span className="ml-2 text-gray-300">No</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-md text-sm sm:text-base text-white focus:ring-2 focus:ring-green-500 focus:border-transparent [&_option]:bg-gray-800 [&_option]:text-gray-200 [&_option]:text-sm sm:[&_option]:text-base"
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

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message/Request <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please provide details about your enquiry..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="inline-flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 text-green-500 focus:ring-green-500 rounded border-gray-600"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      I agree to the Terms and Conditions and Privacy Policy <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-4 gap-4">
                  <div className="w-full sm:w-auto">
                    <div className="h-10 flex items-center justify-center sm:justify-start">
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key - replace with your actual reCAPTCHA site key
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                        className="recaptcha"
                        size="normal"
                        style={{
                          transform: 'scale(0.9)',
                          transformOrigin: '0 0',
                        }}
                      />
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          .g-recaptcha {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            gap: 8px !important;
                            height: 100% !important;
                            background: transparent !important;
                            width: 100% !important;
                          }
                          @media (min-width: 640px) {
                            .g-recaptcha {
                              justify-content: flex-start !important;
                              width: auto !important;
                            }
                          }
                          .g-recaptcha > div {
                            background: transparent !important;
                            border: none !important;
                            box-shadow: none !important;
                          }
                          .g-recaptcha iframe {
                            background: transparent !important;
                            margin: 0 !important;
                          }
                          .rc-anchor {
                            background: transparent !important;
                            border: none !important;
                            box-shadow: none !important;
                          }
                          .rc-anchor-light {
                            background: transparent !important;
                          }
                          .rc-anchor-normal {
                            height: auto !important;
                          }
                        `
                      }} />
                    </div>
                  </div>
                  <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-md"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeTerms || !recaptchaToken}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Submit Request'}
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium text-green-400 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
                  <div>
                    <h4 className="font-medium text-white mb-2">Email</h4>
                    <a href="mailto:support@nextgenpng.net" className="text-green-400 hover:underline">support@nextgenpng.net</a>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Phone</h4>
                    <div className="flex flex-col">
                      <a href="tel:+6753252023" className="text-green-400 hover:underline">(+675) 325 2023</a>
                      <a href="tel:+6753112020" className="text-green-400 hover:underline">(+675) 311 2020</a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Our Location</h4>
                    <p>Port Moresby</p>
                    <p>Mutual Rumana Building, Section 405</p>
                    <p>Lot 12 & 13, Port Moresby, NCD, PNG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-green-400 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Customer Support
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expert Technical Team
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fast Response Time
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure & Reliable
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-medium text-white mb-3">Need Immediate Assistance?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Our support team is available to help you with any questions or issues you may have.
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Support Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
