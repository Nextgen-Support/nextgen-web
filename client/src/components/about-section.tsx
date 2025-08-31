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

const Image = ({ src, alt, width, height, className, ...props }: ImageProps) => (
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
      name: "John Doe",
      role: "CEO & Founder",
      image: "/team/ceo.jpg", // Replace with actual image path
      description: "20+ years of experience in ICT solutions and business leadership."
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/team/cto.jpg", // Replace with actual image path
      description: "Expert in system architecture and technology innovation."
    },
    {
      name: "Michael Johnson",
      role: "Head of Operations",
      image: "/team/operations.jpg", // Replace with actual image path
      description: "Specializes in project management and operational excellence."
    }
  ];

  // Accreditations data
  const accreditations = [
    { name: "ISO 9001:2015 Certified", icon: "🏆" },
    { name: "ICT Industry Certified", icon: "💼" },
    { name: "Microsoft Gold Partner", icon: "🔹" },
    { name: "Cisco Certified Partner", icon: "🔸" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7) contrast(1.1)',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Who We Are Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 text-sm font-semibold text-blue-700 bg-white/90 rounded-full mb-4 shadow-md border border-blue-100">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              NextGen Technology Limited (PNG)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              NextGen Technology Limited (PNG) is a locally owned company. It is
              one of the few ICT companies in Papua New Guinea.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Company started in the year 2020 where it offers diversified
                  products & professional services from premium CCTV/security
                  products to system integration, network management services
                  etc.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    "CCTV/Security",
                    "System Integration",
                    "Network Management",
                    "IT Solutions",
                  ].map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white h-full flex flex-col justify-center">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 mb-4 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">
                    Our Mission & Vision
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    To be the leading ICT provider in Papua New Guinea,
                    delivering world class professional products, services &
                    technical expertise through research & development to suit
                    PNG demography & end-user knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our team of dedicated professionals is committed to delivering exceptional service and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Licenses Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Accreditations & Licenses
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                We are proud to be recognized and certified by leading industry organizations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {accreditations.map((item, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                All our accreditations are available upon request. Contact us for more information about our certifications.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
                Request Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
