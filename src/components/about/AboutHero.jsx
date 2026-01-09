import hero from '../../assets/images/abouthero.jpg';
import hero1 from '../../assets/images/a-hero.webp';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="w-full relative">
      <div
        className="
                  w-full 
                  h-[300px] sm:h-[400px] md:h-[608px] 
                  bg-cover bg-center bg-no-repeat
                  relative
                "
        style={{ backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 39.32%, rgba(0, 0, 0, 0.8) 100%),
          url(${hero1})` }}
      >
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-20 h-full flex items-end">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="
                      text-white font-bold 
                      text-[24px] leading-[36px] 
                      sm:text-[32px] sm:leading-[48px] 
                      md:text-[48px] md:leading-[60px] 
                      drop-shadow-2xl
                      mb-[50px] md:mb-[75px] lg:mb-[90px]
                    "
          > Moving cities. Empowering people.
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;