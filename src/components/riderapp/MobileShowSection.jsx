import React from 'react';
import mobile from '../../assets/images/mobilerider.webp'

const MobileShowcaseSection = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-[105px]">
      <div className="w-full max-w-[1000px] mx-auto px-5 md:px-0">
        <img src={mobile} alt="Mobile App Showcase" className="w-full" />
      </div>
    </section>
  );
};

export default MobileShowcaseSection;