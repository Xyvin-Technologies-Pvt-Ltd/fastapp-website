import React from 'react';
import mobile from '../../assets/images/homegroup.webp'

const MobileShowcaseSection = () => {
  return (
    <section className="w-full bg-white  ">
      <div className="w-full max-w-[1000px] mx-auto px-5 md:px-0">
        <img src={mobile} alt="Mobile App Showcase" className="w-full" />
      </div>
    </section>
  );
};

export default MobileShowcaseSection;