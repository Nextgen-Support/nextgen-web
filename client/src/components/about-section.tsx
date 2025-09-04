import React from "react";

// Team member interface
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

// Custom Image component using standard HTML img
type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  [key: string]: any;
};

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ImageProps) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    {...props}
  />
);

export default function AboutSection() {
  // Sample team data - replace with actual team members
  const teamMembers: TeamMember[] = [
    {
      name: "Mr. Jay-ar Tugare",
      role: "ICT Operations Manager",
      image: "/team/ceo.jpg", // Replace with actual image path
      description: " ", // add info about his qualification
    },
    {
      name: "Mr Jerome Natividad",
      role: "ICT Project Manager",
      image: "/team/cto.jpg", // Replace with actual image path
      description: " ", // add info about his qualification
    },
  ];

  // Accreditations data
  const accreditations = [
    { 
      name: "Holowits", 
      logo: "/asset/image/holowits.png",
      description: "Certified Partner"
    },
    { 
      name: "Dokmee", 
      logo: "/asset/image/dokmee.png",
      description: "Authorized Reseller"
    },
  ];

  return (
    <div>
      <div
        id="about"
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/cyber-circuit-background_52683-40259.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
              backgroundRepeat: "no-repeat",
              filter: "grayscale(100%) brightness(1.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-white/80"></div>
        </div>

        {/* Who We Are Section - Full Width Background */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat py-8 md:py-12"
          style={{ backgroundImage: "url('/asset/image/who-we-are.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* All items in who we are section*/}
            <div className="w-full p-2 md:p-6 bg-black/70 border border-white/30 rounded-lg">
              <div className="text-center mb-6 md:mb-8">
                <span className="inline-block px-10 py-2 text-sm font-semibold text-blue-700 bg-white/90 rounded mb-4 shadow-md border border-blue-100">
                  Who We Are
                </span>
                <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
                <p className="text-white leading-relaxed max-w-4xl mx-auto">
                  NextGen Technology Limited (PNG) is a locally owned company.
                  It is one of the few ICT companies in Papua New Guinea.
                </p>
              </div>

              <div className="w-full p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Our Story */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">Our Story</h3>
                    <div className="space-y-4">
                      <p className="text-white leading-relaxed">
                        Established in 2020, NextGen Technology Limited has
                        rapidly grown to become a leading ICT provider in Papua
                        New Guinea. From our headquarters in Port Moresby, we've
                        built a reputation for delivering innovative technology
                        solutions tailored to the unique needs of the local
                        market.
                      </p>
                      <p className="text-white leading-relaxed">
                        Our journey has been marked by continuous growth and
                        expansion of our service portfolio, allowing us to meet
                        the evolving technological demands of businesses across
                        various sectors.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Mission & Vision */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 h-full">
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          Our Vision
                        </h3>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        To be the leading ICT provider in Papua New Guinea,
                        recognized for innovation, reliability, and exceptional
                        service delivery across all sectors.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          Our Mission
                        </h3>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        To empower businesses in Papua New Guinea with
                        cutting-edge ICT solutions, delivering world-class
                        professional services and technical expertise tailored
                        to the unique needs of the local market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="relative w-full py-0 md:py-0">
        {/* Desktop Background Image - Full size and clear */}
        <div className="hidden md:block w-full h-screen">
          <img 
            src="/asset/image/team2.png" 
            alt="Our Team"
            className="w-full h-full object-cover object-center"
            style={{
              maxWidth: '100%',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
        </div>
        
        {/* Mobile Card - Only visible on small screens */}
        <div className="md:hidden w-full py-8 px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md mx-auto">
            <div className="relative h-64 w-full">
              <img 
                src="/asset/image/team2.png" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Accreditations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {accreditations.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <img 
                    src={item.logo} 
                    alt={`${item.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All our accreditations are available upon request. Contact us for
              more information about our certifications.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
              Request Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
