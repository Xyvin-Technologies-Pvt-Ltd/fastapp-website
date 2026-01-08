import React from 'react';
import big from '../../assets/images/Big.webp';
import { PiUsers } from "react-icons/pi";
import { IoMdHelpBuoy } from "react-icons/io";
import { PiSmileyStickerLight } from "react-icons/pi";
import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import sos from '../../assets/images/safty-vector.webp';

const SafetySection = () => {
  const leftSafetyFeatures = [
    {
      icon: <PiUsers className="w-6 h-6 flex-shrink-0" />,
      title: 'Driver identity verification',
      description: 'All drivers are verified to ensure a trusted ride experience.'
    },
    {
      icon: <img src={sos} alt="SOS icon" className="w-[26px] h-[26px] object-contain" />,
      title: 'SOS / emergency assistance',
      description: 'Get instant help with one tap in case of emergencies.'
    }
  ];

  const rightSafetyFeatures = [
    {
      icon: <SparklesIcon className="w-6 h-6 flex-shrink-0" />,
      title: 'Real-time trip monitoring',
      description: 'Your trip is tracked live from pickup to drop-off.'
    },
    {
      icon: <PiSmileyStickerLight className="w-6 h-6 flex-shrink-0" />,
      title: 'Trip history & receipts',
      description: 'Access past rides and detailed receipts anytime.'
    }
  ];

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="w-full bg-white py-[45px] sm:py-[53px] lg:py-[60px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[101px]">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-7 items-center px-1 sm:px-2 lg:px-[6px]"
          >
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-medium leading-[43px] sm:leading-[50px] lg:leading-[58px] text-center">
              <span >Safety for</span>
              <span className="text-[#2DA151] italic"> Riders</span>
            </h2>

            <div className="mb-9">
              <p className="text-lg font-medium leading-[22px] text-center text-[#ACACAC]">
                Your safety is built into every ride, from booking to drop-off.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] items-stretch">
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5 h-full"
            >
              {leftSafetyFeatures?.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-background-white border border-[#0000001A] rounded-xl p-[21px] sm:p-[25px] lg:p-[28px] flex flex-col gap-[22px] sm:gap-[26px] lg:gap-[30px] items-start flex-1 transition-shadow hover:shadow-lg"
                >
                  <div className="w-[58px] h-[58px] bg-black rounded-[14px] flex items-center justify-center flex-shrink-0">
                    <div className="text-white [&>svg]:w-[30px] [&>svg]:h-[30px] flex items-center justify-center">
                      {feature?.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-neue text-2xl font-medium leading-[29px] text-text-secondary">
                      {feature?.title}
                    </h3>
                    <p className="font-haas text-[18px] leading-[27px] text-[#ACACAC]">
                      {feature?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center h-full"
            >
              <div className="w-full h-full border border-[#0000001A] rounded-xl pt-[28px] px-[28px] pb-0 bg-white flex items-end justify-center overflow-hidden">
                <img
                  src={big}
                  alt="Background"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5 h-full"
            >
              {rightSafetyFeatures?.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-background-white border border-[#0000001A] rounded-xl p-[21px] sm:p-[25px] lg:p-[28px] flex flex-col gap-[22px] sm:gap-[26px] lg:gap-[30px] items-start flex-1 transition-shadow hover:shadow-lg"
                >
                  <div className="w-[58px] h-[58px] bg-black rounded-[14px] flex items-center justify-center flex-shrink-0">
                    <div className="text-white [&>svg]:w-[30px] [&>svg]:h-[30px] flex items-center justify-center">
                      {feature?.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-neue text-2xl font-medium leading-[29px] text-text-secondary">
                      {feature?.title}
                    </h3>
                    <p className="font-haas text-[18px] leading-[27px] text-[#ACACAC]">
                      {feature?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
