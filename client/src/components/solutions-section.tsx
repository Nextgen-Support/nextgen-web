import React, { useRef, useEffect } from "react";
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const scrollbarStyles = `
  .solutions-scroll-container::-webkit-scrollbar {
    display: none;
  }
  .solutions-scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? 50 : -50,
    y: 30,
    rotate: i % 2 === 0 ? 5 : -5,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      mass: 0.5,
      delay: i * 0.1,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export function SolutionsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // Disable rootMargin on mobile to prevent premature triggering
    rootMargin: window.innerWidth > 768 ? '0px' : '0px 0px -25% 0px',
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const solutions = [
    {
      title: "Document Management",
      description:
        "Efficient and secure document handling and storage solutions",
      image: "/asset/image/document management-card.jpg",
      link: "/services/document-management"
    },
    {
      title: "ISP Solutions",
      description:
        "High-speed internet and network connectivity services",
      image: "/asset/image/hosting-card.jpg",
      link: "/services/isp"
    },
    {
      title: "Networking & Structure Solution",
      description: "Robust networking infrastructure and structured cabling",
      image: '/asset/image/networking-card.jpg',
      link: "/services/security"
    },
    {
      title: "Software Solution",
      description:
        "Custom software development and business application solutions",
      image: "/asset/image/software solution -card.jpg",
      link: "/services"
    },
  ];

  return (
    <section ref={ref} id="solutions" className="py-16 bg-gray-50 w-full">
      <style>{scrollbarStyles}</style>
      <div className="w-full">
        <motion.div
          className="mx-auto px-4 sm:px-6 lg:px-8 w-full"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Innovative technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="w-full pb-6">
            <div className="solutions-scroll-container overflow-x-auto pb-4">
              <motion.div
                className="flex justify-center gap-6 px-4 w-max mx-auto"
                variants={staggerContainer}
                style={{
                  padding: '1rem 0',
                  margin: '0 auto',
                }}
              >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = solution.link;
                  }}
                    custom={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: {
                        y: { type: "spring", stiffness: 300 },
                        boxShadow: { duration: 0.3 },
                      },
                    }}
                    initial="hidden"
                    animate={controls}
                  >
                    <div className="relative bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden flex flex-col items-center">
                      <div className="relative h-56 w-64">
                        <img 
                          src={solution.image} 
                          alt={solution.title}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/placeholder-image.jpg';
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-semibold text-lg">{solution.title}</h3>
                      </div>
                    </div>
                  </motion.div>
              ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
