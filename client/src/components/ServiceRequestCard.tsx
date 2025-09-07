import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceRequestCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Here you would typically make an API call to submit the form
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your support request has been submitted successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Optionally redirect after a delay
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
    <div className="max-w-2xl mx-auto p-6 bg-white/5 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 mt-10">
      <h2 className="text-2xl font-bold text-green-400 mb-6">Submit a Support Request</h2>
      
      {submitStatus && (
        <div className={`p-4 mb-6 rounded ${
          submitStatus.success ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'
        }`}>
          <p className="text-white">{submitStatus.message}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-red-500">*</span>
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-red-500">*</span>
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
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="document-management">Document Management</option>
            <option value="cctv-solutions">CCTV Solutions</option>
            <option value="web-hosting">Web and Domain Hosting</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
          ></textarea>
        </div>
        
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
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
      </form>
    </div>
  );
};

export default ServiceRequestCard;
