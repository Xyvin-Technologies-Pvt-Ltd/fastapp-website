import React from 'react';
import driverapp from '../../assets/images/d-hero.webp';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full relative">
      <div
        className="
          w-full 
          h-[300px] sm:h-[400px] md:h-[508px] 
          bg-cover bg-center bg-no-repeat
          relative
        "
       style={{ backgroundImage: `
                 linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%),
                 url(${driverapp})
                 ` }}
      >

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] h-full flex items-end">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="
              text-white font-bold font-haas
              text-[24px] leading-[36px] 
              sm:text-[32px] sm:leading-[48px] 
              md:text-[48px] md:leading-[60px] 
              drop-shadow-2xl
              mb-[50px] md:mb-[75px] lg:mb-[90px]
            "
          >Your Ride. Your Way. Anytime.</motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;