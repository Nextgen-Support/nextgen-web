// This file initializes reCAPTCHA callbacks
// The types are defined in src/types/globals.d.ts

// Initialize reCAPTCHA callbacks
if (typeof window !== 'undefined') {
  window.onRecaptchaSuccess = (token: string) => {
    // This will be called when reCAPTCHA is successfully completed
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'g-recaptcha-response';
    input.value = token;
    
    // Remove any existing token input
    const existingInput = document.querySelector('input[name="g-recaptcha-response"]');
    if (existingInput) {
      existingInput.remove();
    }
    
    document.querySelector('form')?.appendChild(input);
  };

  window.onRecaptchaExpired = () => {
    // This will be called when reCAPTCHA expires
    const input = document.querySelector('input[name="g-recaptcha-response"]');
    if (input) {
      input.remove();
    }
  };

  window.onRecaptchaError = () => {
    // This will be called when reCAPTCHA encounters an error
    const input = document.querySelector('input[name="g-recaptcha-response"]');
    if (input) {
      input.remove();
    }
  };
}
