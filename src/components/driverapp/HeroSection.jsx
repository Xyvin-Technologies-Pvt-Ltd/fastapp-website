import React from 'react';
import driverapp from '../../assets/images/driverapp.jpg';

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
        style={{ backgroundImage: `url(${driverapp})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-14 h-full flex items-end">
          <h1
            className="
              text-white font-bold 
              text-[24px] leading-[36px] 
              sm:text-[32px] sm:leading-[48px] 
              md:text-[48px] md:leading-[60px] 
              drop-shadow-2xl
              mb-[50px] md:mb-[75px] lg:mb-[90px]
            "
          >
            Drive. Earn. Be in Control.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;