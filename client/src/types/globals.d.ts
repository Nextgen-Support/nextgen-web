interface Window {
  grecaptcha: {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    // Add other grecaptcha methods if needed
  };
}
