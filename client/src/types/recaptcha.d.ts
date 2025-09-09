export interface ReCaptchaV2 {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
  render: (
    container: string | HTMLElement, 
    parameters: { 
      sitekey: string; 
      callback: (token: string) => void; 
      'expired-callback'?: () => void; 
      theme?: string;
      size?: string;
    }
  ) => string;
  reset: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string;
}

declare global {
  interface Window {
    grecaptcha: ReCaptchaV2;
  }
}
