interface Window {
  // reCAPTCHA v2
  grecaptcha: {
    // v2 methods
    render: (container: string | HTMLElement, parameters: {
      sitekey: string;
      theme?: 'light' | 'dark';
      size?: 'normal' | 'compact' | 'invisible';
      tabindex?: number;
      callback?: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    }) => number;
    
    reset: (opt_widget_id?: number) => void;
    getResponse: (opt_widget_id?: number) => string;
    
    // v3 methods
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    ready: (callback: () => void) => void;
    
    // Enterprise methods
    enterprise: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  };
  
  // reCAPTCHA callbacks
  onRecaptchaSuccess?: (token: string) => void;
  onRecaptchaExpired?: () => void;
  onRecaptchaError?: () => void;
  onRecaptchaLoad?: () => void;
}
