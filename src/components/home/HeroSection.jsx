import React from 'react';
import HeroImage from '../../assets/images/hero.webp';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 z-0  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(181.47deg, rgba(0,0,0,0) 15.32%, rgba(0,0,0,0.7) 84.29%),
            url(${HeroImage})
          `
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-neue font-bold tracking-tight drop-shadow-xl
            text-4xl leading-[1.2] -tracking-[0.8px] mb-[9px]
            md:text-6xl
            lg:text-[60px]"
        >
          Book Rides in Minutes <br />
          With <span className="text-[#2DA151] italic">FastApp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-neue font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30.6px] text-center"
        >
          Get affordable rides with live tracking and easy payments.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-neue font-normal text-[16px] mb-[9px] md:text-[18px] leading-[26px] md:leading-[30.6px] text-center"
        >
          Fast, Safe Rides — Anytime, Anywhere
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://apps.apple.com/in/app/fast-app-rider/id6754153644"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[16px] font-bold hover:bg-gray-100 transition active:scale-95"
          >
            <FaApple className="text-[24px]" />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.xyvin.fastapp"
            target="_blank"
            className="sm:w-auto flex items-center justify-center gap-2 bg-white text-black border-gray-300 px-5 py-3 rounded-[100px] text-[16px] leading-[27.2px] font-[700] font-sans hover:bg-gray-100 transition active:scale-95 cursor-pointer"
          >
            <FaGooglePlay className="text-[20px]" />Google Play
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
