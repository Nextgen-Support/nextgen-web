// Base URL for API requests
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Get the authorization token from environment variables
const getAuthToken = (): string | null => {
  return import.meta.env.VITE_API_AUTH_TOKEN || null;
};

// Helper function to create headers with auth token
const createAuthHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  const token = getAuthToken();
  if (token) {
    // Using the standard Authorization header with Bearer scheme
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

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

export const getServiceRequests = async (): Promise<ApiResponse<ServiceRequestResponse[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/service-requests`, {
      headers: createAuthHeaders()
    });
    
    const data = await response.json();

    if (!response.ok) {
      // Handle 401 Unauthorized (token expired/invalid)
      if (response.status === 401) {
        // TODO: Add your token refresh or logout logic here
        console.error('Authentication failed');
      }
      throw new Error(data.message || 'Failed to fetch service requests');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

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
      headers: createAuthHeaders(),
      body: JSON.stringify(body),
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      // If there are validation errors, include them in the error message
      if (response.status === 400 && responseData.errors) {
        const errorMessages = responseData.errors
          .map((error: any) => `${error.path}: ${error.msg}`)
          .join('\n');
        throw new Error(`Validation failed:\n${errorMessages}`);
      }
      throw new Error(responseData.message || 'Failed to submit service request');
    }

    return responseData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
