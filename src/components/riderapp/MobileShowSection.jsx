import React from 'react';
import mobile from '../../assets/images/mobilerider.webp'
import { motion } from 'framer-motion';

const MobileShowcaseSection = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-[105px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1000px] mx-auto px-5 md:px-0"
      >
        <img src={mobile} alt="Mobile App Showcase" className="w-full" />
      </motion.div>
    </section>
  );
};

export default MobileShowcaseSection;