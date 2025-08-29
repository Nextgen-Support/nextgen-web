export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who we are
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">NextGen Technology Limited (PNG)</span> is a locally owned company. 
              It is one of the few ICT companies in Papua New Guinea.
            </p>
            <p className="text-lg text-gray-600">
              Company started in year 2020 where it offers diversified products & professional services from 
              premium CCTV/Security products to system integration, Network Management services, and more...
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/asset/image/team.png"
                alt="NextGen Technology Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <span className="text-white text-2xl font-bold text-center p-8">
                  Innovating for a Smarter Tomorrow
                </span>
              </div>
            </div>
          </div>
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the leading ICT provider in Papua New Guinea, delivering world class professional products, 
              services & technical expertise through research & development to suit PNG demography & end-user knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
