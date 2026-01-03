import logo from '../../assets/images/logo.webp';
import image1 from '../../assets/images/a-image.webp';
import image2 from '../../assets/images/a-image2.webp';
import image3 from '../../assets/images/a-image3.webp';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="py-20 px-6 md:px-20 lg:px-[120px] bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-5">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-[85.5px] h-[40px] shrink-0 mt-2"
                    >
                        <img src={logo} alt="FastApp Logo" className="w-full h-full object-contain" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-neue font-medium text-[32px] md:text-[42px] leading-[40px] md:leading-[50px] tracking-[-0.5px] text-black max-w-[950px]"
                    >
                        FastApp is a smart, reliable ride-hailing platform built to make everyday travel safer, faster, and more affordable for riders — while creating fair earning opportunities for drivers.
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                    <div className="flex flex-col justify-between lg:w-[55%]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-haas font-bold text-[16px] leading-[24px] tracking-[-0.8px] uppercase"
                        >
                            Who <span className="text-[#7E7E7E] font-[700]">We Are?</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex gap-4 items-center mt-8 lg:mt-0"
                        >
                            <motion.img whileHover={{ scale: 1.05 }} src={image1} alt="About 1" className="w-[100px] h-[100px] lg:w-32 lg:h-30 object-cover rounded-[8px]" />
                            <motion.img whileHover={{ scale: 1.05 }} src={image2} alt="About 2" className="w-[100px] h-[100px] lg:w-32 lg:h-30 object-cover rounded-[8px]" />
                            <motion.img whileHover={{ scale: 1.05 }} src={image3} alt="About 3" className="w-[100px] h-[100px] lg:w-32 lg:h-30 object-cover rounded-[130px]" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col gap-6 lg:w-[42%] font-haas font-medium text-[16px] lg:text-[18px] leading-[24px] text-[#7E7E7E] lg:text-right lg:items-end"
                    >
                        <div className="max-w-[600px] text-left">
                            <p className="mb-10 font-haas">
                                FastApp is a technology-driven mobility platform that connects riders with nearby drivers in just a few taps. Our mission is to simplify urban transportation by combining real-time technology, transparent pricing, and safety-first design.
                            </p>
                            <p>
                                Whether you're commuting to work, heading out late at night, or driving to earn on your own schedule — FastApp is built to support you every step of the way.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
