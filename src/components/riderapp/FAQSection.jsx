import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      question: 'How do I know the fare before booking?',
      answer: 'You will see the estimated fare and the expected arrival time before confirming.'
    },
    {
      question: 'Are drivers verified?',
      answer: 'Yes. All drivers go through a verification process which includes ID validation, background checks, and document verification before they are allowed to drive.'
    },
    {
      question: 'Can I track my ride?',
      answer: 'Absolutely. Once your ride is confirmed, you can track your driver’s live location in real-time until you reach your destination.'
    },
    {
      question: 'What if I face an issue during the ride?',
      answer: 'If you face any issue during your ride, you can contact support through the app or use the in-app emergency options for immediate help.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="w-full bg-white py-[70px] sm:py-[82px] lg:py-[94px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col gap-[42px] sm:gap-[49px] lg:gap-[56px] items-start  mb-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-[43px] sm:leading-[50px] lg:leading-[58px] capitalize text-text-secondary font-haas"
          >
            <span>FAQ</span>
            <span className="text-[#2DA151]"> (Riders)</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex flex-col"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full border-t border-[#0000001A]"
              >
                <div
                  className="py-[23px] cursor-pointer flex justify-between items-center group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-haas font-normal text-[20px] leading-[23.8px] text-black group-hover:text-[#2DA151] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="text-[24px] text-gray-400 group-hover:text-[#2DA151] transition-colors">
                    {expandedFAQ === index ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-[23px]">
                        <p className="font-haas font-normal text-[18px] leading-[23.8px] text-[#ACACAC] w-[90%]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
