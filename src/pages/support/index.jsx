import React from 'react';
import { MdEmail } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import ui from '../../assets/images/newui.webp'
import phone from '../../assets/images/mobileui.webp'
import bg from '../../assets/images/bg.png'
import scanner1 from '../../assets/images/scanner1.webp'
import scanner2 from '../../assets/images/scanner2.webp'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';

const SupportContact = () => {
  const supportOptions = [
    {
      id: 'email',
      icon: <MdEmail style={{ fill: "url(#support-icon-gradient)" }} className="w-[42.5px] h-[38.25px]" />,
      title: 'Email support',
      contact: 'support@fastrideapp.com',
      link: 'mailto:support@fastrideapp.com'
    },
    {
      id: 'chat',
      icon: <BsChatFill style={{ fill: "url(#support-icon-gradient)" }} className="w-[42.5px] h-[38.25px]" />,
      title: 'WhatsApp chat',
      contact: '+249912200031',
      link: 'https://wa.me/249912200031'
    },
    {
      id: 'phone',
      icon: <FaPhoneAlt style={{ fill: "url(#support-icon-gradient)" }} className="w-[42.5px] h-[38.25px]" />,
      title: 'Phone support',
      contact: '66700',
      link: 'tel:66700'
    }
  ];

  const appDownloadLinks = [
    {
      id: 'app-store',
      icon: scanner2,
      title: 'Download Driver App',
    },
    {
      id: 'play-store',
      icon: scanner1,
      title: 'Download Passenger App',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="support-icon-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(161.57, 0.5, 0.5)">
          <stop offset="12.5%" stopColor="#2DA151" />
          <stop offset="93.75%" stopColor="#004716" />
        </linearGradient>
      </svg>

      <section className="w-full pt-[120px] pb-[60px] sm:pb-[80px] lg:pb-[96px] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center items-center text-center bg-background-[#F4F4F4]"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[42px] sm:leading-[54px] md:leading-[63px] lg:leading-[73px] text-text-primary mb-4 sm:mb-6 lg:mb-[20px] max-w-4xl">
              Contact FastApp Support
            </h1>
            <p className="text-base text-[#7E7E7E] text-[18px] font-normal leading-[21px] text-text-muted max-w-2xl">
              If you can’t find what you’re looking for, our support team is ready to help.            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-[60px] sm:py-[80px] lg:py-[102px] bg-white overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-[302px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-[40px] sm:gap-[60px] lg:gap-[100px] justify-center items-stretch"
          >
            {supportOptions?.map(option => (
              <motion.a
                key={option?.id}
                href={option?.link}
                target={option?.id === 'chat' ? '_blank' : undefined}
                variants={itemVariants}
                whileHover={{ y: -1, shadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="
                        group flex flex-col items-start cursor-pointer
                        bg-[#FAFAFA]
                        rounded-[12px]
                        border border-[#1A1A1A0D]
                        shadow-[0_0_4px_0_#0000000A]
                        pl-[36px] pr-[36px] pt-[35px] pb-[30px]
                        hover:border-[#2DA15140]
                        no-underline
                    "
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-[16px]"
                >
                  {option?.icon}
                </motion.div>

                <h3
                  className="font-haas whitespace-nowrap group-hover:text-[#2DA151] transition-colors mb-[8px]"
                  style={{
                    fontWeight: 500,
                    fontSize: '22px',
                    lineHeight: '120%',
                    letterSpacing: '-0.5%'
                  }}
                >
                  {option?.title}
                </h3>

                <p
                  className="font-haas text-[#7E7E7E] group-hover:text-[#2DA151] transition-colors"
                  style={{
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '140%'
                  }}
                >
                  {option?.contact}
                </p>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="w-full pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] relative overflow-visible">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #49BA6C 0%, #F9F9F9 64.8%, #F9F9F9 81.89%, #F9F9F9 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[162px]">
            <div className="flex flex-col md:flex-row items-start gap-[10px] md:gap-[20px] lg:gap-0">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex-none w-full md:w-auto flex justify-center md:justify-start"
              >
                <div className="relative w-[180px] h-[283px] sm:w-[220px] sm:h-[346px] md:w-[270px] md:h-[425px] lg:w-[364px] lg:h-[500px]">
                  <img
                    src={phone}
                    alt="Phone Frame"
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              <div className="flex flex-col gap-[20px] sm:gap-[28px] md:gap-[36px] lg:gap-[48px] w-full text-center md:text-left md:pl-[30px] lg:pl-[42px] pb-[30px] md:pb-[50px] lg:pb-[15px] mt-[10px] md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-[12px] sm:gap-[14px] md:mt-0 lg:mt-[70px]"
                >
                  <h2
                    className="text-text-primary max-w-2xl mx-auto md:mx-0 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 600,
                      lineHeight: '120%',
                      letterSpacing: '-2.5px'
                    }}
                  >
                    Get Where You are Going — Faster & Smarter
                  </h2>
                  <p
                    className="text-text-primary w-[84%] mx-auto md:mx-0 lg:max-w-none text-[14px] sm:text-[15px] md:text-[16px]"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '170%',
                      letterSpacing: '0%'
                    }}
                  >
                    Need help with a ride, account, or payment? Our support team is here to assist you quickly and reliably.
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start md:ml-0 lg:ml-0"
                >
                  {appDownloadLinks?.map((link) => (
                    <motion.div
                      key={link?.id}
                      variants={itemVariants}
                      whileHover={{ y: -5, backgroundColor: "#ffffff" }}
                      className="flex items-center bg-background-tertiary rounded-xl p-2 sm:p-[6px] lg:p-[8px] w-full sm:w-[260px] md:w-[280px] lg:w-[318px] hover:shadow-md transition-all duration-300 border border-transparent"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={link?.icon}
                          alt={link?.title}
                          className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[78px] md:h-[78px] lg:w-[84px] lg:h-[84px] rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col justify-center flex-1 ml-3 sm:ml-4">
                        <span className="text-sm sm:text-base font-medium leading-[18px] sm:leading-[20px] text-text-primary">
                          {link?.title}
                        </span>
                        <span className="text-[9px] sm:text-xs font-normal leading-[11px] sm:leading-[12px] text-text-primary mt-1">
                          Scan to download
                        </span>
                        <div className="flex justify-end mt-1">
                          <IoIosArrowRoundForward className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DA151]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SupportContact;