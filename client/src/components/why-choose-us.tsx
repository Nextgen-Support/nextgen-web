import { CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const containerVariants: Variants = isMobile ? {
    hidden: { opacity: 1 },
    visible: { opacity: 1 }
  } : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  const itemVariants: Variants = isMobile ? {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 }
  } : {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.15
      },
    }),
  };

  const imageVariants: Variants = isMobile ? {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 }
  } : {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      },
    },
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left side - Text content */}
          <motion.div 
            className="md:w-1/2"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Why Choose Us
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-blue-600 mb-6"
              variants={itemVariants}
            ></motion.div>

            <motion.ul 
              className="space-y-3 text-base md:text-lg"
              variants={containerVariants}
            >
              {[
                "Data Security - Enterprise-grade protection for your sensitive information",
                "24/7 Support - Round-the-clock assistance whenever you need it",
                "Scalable Solutions - Grow your business without technical limitations",
                "Regional Expertise - Local knowledge with global standards",
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                  custom={index}
                >
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right side - Image */}
          <motion.div 
            className="md:w-1/2"
            variants={imageVariants}
          >
            <motion.img
              src="/asset/image/team.png"
              alt="Our Team"
              className="rounded-lg shadow-xl w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
