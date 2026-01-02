import React from 'react';
import big from '../../assets/images/Big.webp';
import { PiUsers } from "react-icons/pi";
import { IoMdHelpBuoy } from "react-icons/io";
import { PiSmileyStickerLight } from "react-icons/pi";
import { SparklesIcon } from '@heroicons/react/24/solid';

const SafetySection = () => {
  const leftSafetyFeatures = [
    {
      icon: <PiUsers className="w-6 h-6 flex-shrink-0" />,
      title: 'Driver identity verification',
      description: 'All drivers are verified to ensure a trusted ride experience.'
    },
    {
      icon: <IoMdHelpBuoy className="w-6 h-6 flex-shrink-0" />,
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

  return (
    <section className="w-full bg-white py-[45px] sm:py-[53px] lg:py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[101px]">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
          <div className="flex flex-col gap-7 items-center px-1 sm:px-2 lg:px-[6px]">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-medium italic leading-[43px] sm:leading-[50px] lg:leading-[58px] text-center">
              <span >Safety for</span>
              <span className="text-[#2DA151]"> Riders</span>
            </h2>

            <div className="mb-9">
              <p className="text-lg font-medium leading-[22px] text-center text-[#ACACAC]">
                Your safety is built into every ride, from booking to drop-off.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] items-stretch">
            <div className="flex flex-col gap-5 h-full">
              {leftSafetyFeatures?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background-white border border-[#0000001A] rounded-xl p-[21px] sm:p-[25px] lg:p-[28px] flex flex-col gap-[22px] sm:gap-[26px] lg:gap-[30px] items-start flex-1"
                >
                  <div className="w-[58px] h-[58px] bg-black rounded-[14px] flex items-center justify-center flex-shrink-0">
                    <div className="text-white [&>svg]:w-[30px] [&>svg]:h-[30px]">
                      {feature?.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-neue text-2xl font-medium leading-[29px] text-text-secondary">
                      {feature?.title}
                    </h3>
                    <p className="font-haas font-medium text-[18px] leading-[27px] text-[#ACACAC]">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center h-full">
              <div className="w-full h-full border border-[#0000001A] rounded-xl pt-[28px] px-[28px] pb-0 bg-white flex items-end justify-center overflow-hidden">
                <img
                  src={big}
                  alt="Background"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 h-full">
              {rightSafetyFeatures?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background-white border border-[#0000001A] rounded-xl p-[21px] sm:p-[25px] lg:p-[28px] flex flex-col gap-[22px] sm:gap-[26px] lg:gap-[30px] items-start flex-1"
                >
                  <div className="w-[58px] h-[58px] bg-black rounded-[14px] flex items-center justify-center flex-shrink-0">
                    <div className="text-white [&>svg]:w-[30px] [&>svg]:h-[30px]">
                      {feature?.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-neue text-2xl font-medium leading-[29px] text-text-secondary">
                      {feature?.title}
                    </h3>
                    <p className="font-haas font-medium text-[18px] leading-[27px] text-[#ACACAC]">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;