import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
  {
    question: 'How do I know the fare before booking?',
    answer: 'You’ll see the estimated fare and ETA before confirming.'
  },
  {
    question: 'Are drivers verified?',
    answer: 'You’ll see the estimated fare and ETA before confirming.'
  },
  {
    question: 'Can I track my ride?',
    answer: 'You’ll see the estimated fare and ETA before confirming.'
  },
  {
    question: 'What if I face an issue during the ride?',
    answer: 'You’ll see the estimated fare and ETA before confirming.'
  }
];


  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-[70px] sm:py-[82px] lg:py-[94px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-[42px] sm:gap-[49px] lg:gap-[56px] items-start  mb-4">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-[43px] sm:leading-[50px] lg:leading-[58px] capitalize text-text-secondary font-haas">
            <span>FAQ</span>
            <span className="text-[#2DA151]"> (Drivers)</span>
          </h2>

          <div className="w-full flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full border-t border-[#0000001A]">
                <div
                  className="py-[23px] cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-haas font-normal text-[20px] leading-[23.8px] text-black">
                    {faq.question}
                  </h3>
                  <div className="text-[18px]">
                    {expandedFAQ === index ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </div>
                </div>

                {expandedFAQ === index && (
                  <div className="pb-[23px]">
                    <p className="font-haas font-normal text-[18px] leading-[23.8px] text-[#ACACAC]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;