# NextDev Solutions - Static Website

A professional static website for NextDev Solutions built with React, TypeScript, and Tailwind CSS.

## About NextDev Solutions

NextDev Solutions is a fresh new technology company providing:
- Web Design & Development
- Website Updates & Support  
- ERP Software for small to medium enterprises, schools, churches, NGOs
- Airline Ticketing Services (global coverage)
- Computer Hardware & Software Installation and Troubleshooting

## Contact Information

- **WhatsApp:** +67571570096
- **Email:** info@nextdev-png.com
- **Services:** Available worldwide

## Running on Windows

### Option 1: Simple File Opening (Recommended)
1. Download the `dist/public` folder contents
2. Open `index.html` directly in any modern web browser
3. The website will run completely offline

### Option 2: Local Web Server
For better performance and to avoid CORS issues:

1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org/
   - Install the LTS version

2. **Run a simple web server:**
   ```cmd
   cd path/to/dist/public
   npx serve .
   ```
   Or using Python (if installed):
   ```cmd
   cd path/to/dist/public
   python -m http.server 8000
   ```

3. **Open in browser:**
   - Go to `http://localhost:3000` (for serve)
   - Or `http://localhost:8000` (for Python)

### Option 3: Using IIS (Windows)
1. Enable IIS in Windows Features
2. Copy `dist/public` contents to `C:\inetpub\wwwroot\nextdev`
3. Access via `http://localhost/nextdev`

## Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **Modern Styling:** Professional appearance with blue/green color scheme
- **Fast Loading:** Optimized static files
- **SEO Friendly:** Proper meta tags and semantic HTML
- **Contact Integration:** Direct WhatsApp and email links
- **No Database Required:** Pure frontend, no server needed

## File Structure

```
dist/public/
├── index.html          # Main HTML file
├── assets/
    ├── index-[hash].css # Compiled CSS styles
    └── index-[hash].js  # Compiled JavaScript
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Customization

To modify content, colors, or layout, you'll need to:
1. Edit the source files in the development environment
2. Rebuild the static files
3. Replace the contents in `dist/public`

## Support

For technical support or website modifications, contact NextDev Solutions:
- WhatsApp: +67571570096
- Email: info@nextdev-png.com