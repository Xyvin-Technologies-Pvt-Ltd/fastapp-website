import React from 'react';
import mobile from '../../assets/images/mobilerider.webp'
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

const MobileShowcaseSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-10 md:pt-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1000px] mx-auto px-5 md:px-0"
      >
        <img src={mobile} alt={t('mobile.showcase_alt')} className="w-full" />
      </motion.div>
    </section>
  );
};

export default MobileShowcaseSection;