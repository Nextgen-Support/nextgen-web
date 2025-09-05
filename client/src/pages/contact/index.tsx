import React from 'react';
import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-0 py-4 sm:py-8 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Contact Us</h1>
        
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="text-white">
            <ContactForm />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                <div className="flex flex-col items-center p-4 sm:p-0">
                  <div className="mb-3 sm:mb-4">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-medium text-white">Address</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">
                      Mutual Rumana Building - Waigani Sect. 405. Lot 12 & 13,<br />
                      Port Moresby, National Capital District
                    </p>
                  </div>
                </div>
              
                <div className="flex flex-col items-center p-4 sm:p-0">
                  <div className="mb-3 sm:mb-4">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-medium text-white">Phone</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">+675 325 2025</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 sm:p-0">
                  <div className="mb-3 sm:mb-4">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">enquiry@nextgenpng.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
