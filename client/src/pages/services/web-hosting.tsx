import React from 'react';

const WebHostingPage = () => {
  const plans = [
    {
      title: 'Basic',
      price: 'K55',
      period: '/month (excluding GST)',
      features: [
        '1 domain / 1 website',
        '7 POP3 email accounts',
        '200MB disk space per mailbox',
        '2GB monthly traffic',
        '1 MySQL database',
        'No cPanel access'
      ],
      popular: false
    },
    {
      title: 'Standard',
      price: 'K110',
      period: '/month (excluding GST)',
      features: [
        '3 domains / 3 websites',
        '15 POP3 email accounts',
        '400MB disk space per mailbox',
        '4GB monthly traffic',
        '2 MySQL databases',
        'No cPanel access'
      ],
      popular: false
    },
    {
      title: 'Value',
      price: 'K220',
      period: '/month (excluding GST)',
      features: [
        '7 domains / 7 websites',
        '30 POP3 email accounts',
        '1GB disk space per mailbox',
        '10GB monthly traffic',
        '5 MySQL databases',
        'With cPanel access'
      ],
      popular: false
    },
    {
      title: 'Premium',
      price: 'K440',
      period: '/month (excluding GST)',
      features: [
        '15 domains / 15 websites',
        '60 POP3 email accounts',
        '2GB disk space per mailbox',
        '20GB monthly traffic',
        '10 MySQL databases',
        'With cPanel access'
      ],
      popular: false
    },
    {
      title: 'Premium Plus',
      price: 'K550',
      period: '/month (excluding GST)',
      features: [
        '15 domains / 15 websites',
        '100 POP3 email accounts',
        '2GB disk space per mailbox',
        '20GB monthly traffic',
        '10 MySQL databases',
        'With cPanel access'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 sm:text-5xl">
            Web Hosting Plans
          </h1>
          <p className="mt-4 text-xl text-green-500">
            Choose the Plan that suits You
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col h-full min-h-[600px] rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-yellow-500 transform -translate-y-2' : 'border border-blue-800'
              } bg-blue-900`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  POPULAR
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">{plan.title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-800">
                  <a 
                    href="/contact"
                    className={`block w-full py-3 px-4 rounded-xl font-medium text-center transition-colors ${
                      plan.popular 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebHostingPage;
