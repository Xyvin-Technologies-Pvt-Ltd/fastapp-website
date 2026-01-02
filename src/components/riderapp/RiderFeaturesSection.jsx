import React from 'react';
import { PiLightbulbFilamentLight } from "react-icons/pi";
import icon1 from '../../assets/images/icon1.webp';
import icon2 from '../../assets/images/icon2.webp';
import icon3 from '../../assets/images/icon3.webp';
import icon4 from '../../assets/images/icon4.webp';
import icon5 from '../../assets/images/icon5.webp';
import icon6 from '../../assets/images/icon6.webp';

const RiderFeaturesSection = () => {
  const features = [
  {
    icon: icon1,
    title: "Instant Ride Booking",
    description: "Book a ride in just a few taps with nearby verified drivers."
  },
  {
    icon: icon2,
    title: "Upfront & Transparent Pricing",
    description: "See your estimated fare before confirming — no surprises."
  },
  {
    icon: icon3,
    title: "Live Ride Tracking",
    description: "Track your driver’s location and arrival time in real-time."
  },
  {
    icon: icon4,
    title: "Multiple Payment Options",
    description: "Pay securely with cash, card, or digital wallets."
  },
  {
    icon: icon5,
    title: "Ride Ratings & Feedback",
    description: "Rate your trip and help us maintain top-quality service."
  },
  {
    icon: icon6,
    title: "Safety First",
    description: "Your safety is built into every ride — from pickup to drop-off."
  }
];

  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] lg:py-[98px]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-[48px] sm:gap-[56px] lg:gap-[64px] items-center">
          <div className="flex flex-col gap-3 items-center px-4 md:px-[150px] lg:px-[216px]">
            <div className="flex items-center gap-2 py-[8px] px-3 bg-[#F4F7F9] border border-[#DDE5ED] rounded-[100px]">
              <PiLightbulbFilamentLight className="w-5 h-5 flex-shrink-0" />
              <span className="font-instrument-sans font-medium text-base leading-6 align-middle">
                Rider Features
              </span>
            </div>

            <div className="w-full px-1">
              <h2
                className="
                  font-neue font-medium 
                  text-[32px] sm:text-[36px] lg:text-[40px] 
                  leading-[120%] 
                  tracking-[-0.5px] 
                  text-center text-text-secondary
                "
              >
                <span>
Everything you need for a safe, smooth, and reliable ride — 
                </span>
                <span className="text-[#ACACAC]">
                  {" "} designed with riders in mind.
                </span>
              </h2>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="
                bg-white rounded-[5px] 
                shadow-[0px_1.8px_5.39px_0px_#0000000F] 
                flex flex-col gap-4 lg:gap-5 items-start 
                px-5 py-6 lg:pl-[21px] lg:pr-5
              "
              >
                <img
                  src={feature?.icon}
                  alt={feature?.title}
                  className="w-[40px] h-[40px] object-contain"
                />

                <div className="flex flex-col gap-[14px] items-start w-full">
                  <h3 className="
                  font-neue font-medium 
                  text-[20px] leading-[21.37px] 
                  tracking-normal 
                  text-text-secondary
                ">
                    {feature?.title}
                  </h3>
                  <p className="font-geist font-normal text-[17px] leading-[21.37px] tracking-[-0.5%] text-[#ACACAC] whitespace-pre-line">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderFeaturesSection;