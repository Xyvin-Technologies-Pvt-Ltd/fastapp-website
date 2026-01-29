import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      question: t('rider.faq.list.0.q'),
      answer: t('rider.faq.list.0.a')
    },
    {
      question: t('rider.faq.list.1.q'),
      answer: t('rider.faq.list.1.a')
    },
    {
      question: t('rider.faq.list.2.q'),
      answer: t('rider.faq.list.2.a')
    },
    {
      question: t('rider.faq.list.3.q'),
      answer: t('rider.faq.list.3.a')
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
    <section className="w-full bg-white py-7 lg:py-10  overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col gap-10 md:gap-[49px] lg:gap-[56px] items-start  mb-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-[43px] sm:leading-[50px] lg:leading-[58px] capitalize text-text-secondary font-haas"
          >
            <span>{t('rider.faq.title')}</span>
            <span className="text-[#2DA151]"> {t('rider.faq.subtitle')}</span>
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
