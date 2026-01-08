import image from '../../assets/images/Sub Container.webp'
import scanner1 from '../../assets/images/scanner1.webp'
import scanner2 from '../../assets/images/scanner2.webp'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const AppDownloadSection = () => {


  const downloadLinks = [
    {
      title: 'Download from App Store',
      qrCode: scanner1,
    },
    {
      title: 'Download from Play Store',
      qrCode: scanner2,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
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
    <section className="w-full py-0 px-6 md:px-12 lg:px-[120px] bg-white pt-[27px] sm:pt-[32px] lg:pt-[33px] pb-[42px] sm:pb-[49px] lg:pb-[56px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[37px] sm:gap-[44px] lg:gap-[50px] items-center">
          <div className="flex flex-col gap-[55px] items-center w-full sm:w-[80%] lg:w-[66%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-2 items-center px-4 sm:px-[72px] lg:px-[82px]"
            >
              <h2 className="text-[32px] font-haas sm:text-[42px] lg:text-[48px] font-medium leading-[38px] sm:leading-[50px] lg:leading-[57px] text-center text-text-secondary">
                <span>Get Where You are </span>
                <span>Going — </span>
                <span className="italic text-[#2DA151]">Faster & Smarter</span>
              </h2>

              <p className="text-lg text-[#7E7E7E] font-medium leading-[27px] text-center text-text-accent w-full">
                Book rides instantly with real-time tracking, transparent pricing, and trusted drivers — all in one app.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-[22px] sm:gap-[26px] lg:gap-[30px] items-end w-full justify-center"
            >
              <img src={image} alt="" className="w-[80%] sm:w-full lg:w-[85%]" />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center"
          >
            {downloadLinks?.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "#f9fafb" }}
                className="w-full sm:w-auto transition-colors rounded-xl"
              >
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-[4px] sm:p-[5px] lg:p-[6px] flex items-end w-full sm:w-[318px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 w-full p-1 sm:p-[2px] lg:p-[6px]">
                    <img
                      src={link?.qrCode}
                      alt="QR Code"
                      className="w-[63px] sm:w-[74px] lg:w-[84px] h-[63px] sm:h-[74px] lg:h-[84px] mb-[4px] sm:mb-[5px] lg:mb-[6px] rounded-lg"
                    />

                    <div className="flex flex-col justify-center flex-1 ml-3 sm:ml-4">
                      <span className="text-sm sm:text-base font-medium leading-[18px] sm:leading-[20px] text-text-primary">
                        {link?.title}
                      </span>
                      <span className="text-[9px] sm:text-xs font-normal leading-[11px] sm:leading-[12px] text-text-primary mt-1">
                        Scan to download
                      </span>
                      <div className="flex justify-end mt-1">
                        <IoIosArrowRoundForward className="w-5 h-5 sm:w-6 sm:h-6 text-[#2ca050]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
