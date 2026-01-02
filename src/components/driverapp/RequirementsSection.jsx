import React from 'react';
import image from '../../assets/images/drivecar.jpg';
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { PiUsersThreeBold } from "react-icons/pi";


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

  return (
    <section className="w-full bg-white py-[75px] sm:py-[88px] lg:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex flex-col lg:flex-row gap-[28px] sm:gap-[33px] lg:gap-[38px] items-stretch">
          <div className="w-full flex justify-center lg:block">
            <img
              src={image}
              alt="Driver Requirements"
              className="w-max-w-[400px] sm:max-w-[477px] lg:max-w-[554px] h-full "
            />
          </div>

          <div className="w-full  flex flex-col gap-[35px] sm:gap-[40px] lg:gap-[46px]">
            <h2 className="text-[35px] sm:text-[41px] lg:text-[46px] font-medium leading-[42px] sm:leading-[49px] lg:leading-[56px] text-text-secondary">
              <span>What You </span>
              <span className="italic text-[#2DA151]">Need?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirements?.map((requirement, index) => (
                <div
                  key={index}
                  className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#eeeeee] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col justify-between gap-4 min-h-[148px] w-full h-full"
                >
                  <div className="flex items-center gap-2">
                    {requirement?.icon}
                    <h3 className="font-neue font-medium text-[20px] leading-[30px] text-[#1A1A1A]">
                      {requirement?.title}
                    </h3>
                  </div>

                  <p className="font-instrument-sans font-medium text-[16px] leading-[27px] text-[#ACACAC]">
                    {requirement?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;