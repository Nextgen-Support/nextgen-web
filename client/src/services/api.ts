const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export interface ServiceRequestData {
  name: string;
  email: string;
  phone: string;
  isCustomer: 'yes' | 'no';
  subject: string;
  message: string;
  recaptchaToken?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ServiceRequestResponse {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
}

export const submitServiceRequest = async (data: ServiceRequestData): Promise<ApiResponse<ServiceRequestResponse>> => {
  try {
    // Prepare the request body
    const body: any = { ...data };
    
    // Add reCAPTCHA token if available
    if (window.grecaptcha) {
      body.recaptchaToken = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'your-recaptcha-site-key', 
        { action: 'submit' }
      );
    }

    const response = await fetch(`${API_BASE_URL}/service-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to submit service request');
    }

    return responseData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
