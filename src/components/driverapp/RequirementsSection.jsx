import React from 'react';
import image from '../../assets/images/drivecar.webp';
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { PiUsersThreeBold } from "react-icons/pi";
import { motion } from 'framer-motion';


const RequirementsSection = () => {
  const requirements = [
    {
      icon: <BiMessageRoundedDots className="w-6 h-6 flex-shrink-0" />,
      title: 'Valid driving license',
      description: 'A government-approved license to legally drive.'
    },
    {
      icon: <FiShare2 className="w-6 h-6 flex-shrink-0" />,
      title: 'Registered vehicle',
      description: 'A properly registered vehicle in good condition.'
    },
    {
      icon: <FiSmile className="w-6 h-6 flex-shrink-0" />,
      title: 'Smartphone with internet',
      description: 'Required to receive rides and navigate in real time.'
    },
    {
      icon: <PiUsersThreeBold className="w-6 h-6 flex-shrink-0" />,
      title: 'Basic background verification',
      description: 'Simple checks to ensure rider and driver safety.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="w-full bg-white py-10 md:py-[88px] lg:py-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row gap-[28px] sm:gap-[33px] lg:gap-[38px] items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center lg:block"
          >
            <img
              src={image}
              alt="Driver Requirements"
              className="w-max-w-[400px] sm:max-w-[477px] lg:max-w-[554px] h-full rounded-2xl"
            />
          </motion.div>

          <div className="w-full  flex flex-col gap-[35px] sm:gap-[40px] lg:gap-[46px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[35px] sm:text-[41px] lg:text-[46px] font-medium leading-[42px] sm:leading-[49px] lg:leading-[56px] text-text-secondary"
            >
              <span>What You </span>
              <span className="italic text-[#2DA151]">Need?</span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {requirements?.map((requirement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "#2DA151" }}
                  className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#eeeeee] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col justify-between gap-4 min-h-[148px] w-full h-full transition-colors duration-300"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-black group-hover:text-[#2DA151] transition-colors">
                      {requirement?.icon}
                    </div>
                    <h3 className="font-neue font-medium text-[20px] leading-[30px] text-[#1A1A1A]">
                      {requirement?.title}
                    </h3>
                  </div>

                  <p className="font-instrument-sans font-medium text-[16px] leading-[27px] text-[#ACACAC]">
                    {requirement?.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
