import React from 'react';
import icon1 from '../../assets/images/ben1.png';
import icon2 from '../../assets/images/ben2.png';
import icon3 from '../../assets/images/ben3.png';
import icon4 from '../../assets/images/ben4.png';
import { MdTouchApp } from "react-icons/md";


const BenefitsSection = () => {
  const benefits = [
    {
      icon: icon1,
      title: 'Fast Booking',
      description: 'Get a ride in just a few taps',
      iconSize: 'w-[49px] h-[49px]'
    },
    {
      icon: icon2,
      title: 'Transparent Pricing',
      description: 'Know the fare before you ride',
      iconSize: 'w-[43px] h-[43px]'
    },
    {
      icon: icon3,
      title: 'Reliable Drivers',
      description: 'Verified drivers you can trust',
      iconSize: 'w-[32px] h-[32px]'
    },
    {
      icon: icon4,
      title: 'Easy Payments',
      description: 'Pay securely with multiple options',
      iconSize: 'w-[28px] h-[28px]'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white font-neue">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="w-[60px] h-[60px] flex items-center justify-center mb-6 shadow-lg"
                style={{
                  background: 'linear-gradient(161.57deg, #2DA151 12.5%, #004716 93.75%)',
                  borderRadius: '20px'
                }}
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className={`${benefit.iconSize} object-contain`}
                />
              </div>

              <h3 className="font-medium mb-2 text-[24px] tracking-[-0.5px]">
                {benefit.title}
              </h3>
              <p className="font-[400] text-[16px] leading-[26px] text-[#7E7E7E] opacity-80 tracking-[-0.5px] pt-[10px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;