import image from '../../assets/images/our-office.webp'
import { motion } from 'framer-motion'

const OurOfficeSection = () => {
    const visionPoints = [
        "Stress-free",
        "Affordable",
        "Environment-aware",
        "Driven by technology and trust"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-0 md:py-20 px-6 md:px-12 lg:px-[120px] bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[32px]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[42%]"
                >
                    <img
                        src={image}
                        alt="Our Office"
                        className="w-full h-auto aspect-[1] object-cover rounded-2xl"
                    />
                </motion.div>

                <div className="w-full lg:w-[58%] flex flex-col gap-4 lg:px-[32px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:max-w-[85%]"
                    >
                        <span className="font-haas font-bold text-[16px] leading-[28.5px] tracking-[-0.5%] text-black">
                            Our <span className="text-[#7E7E7E]">Vision</span>
                        </span>
                        <h2 className="font-neue font-medium text-[32px] md:text-[40px] leading-[120%] tracking-[0%] text-black mt-4">
                            We envision a <span className="text-[#2DA151] italic">future</span> where city travel is:
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-haas font-normal text-[18px] leading-[24px] tracking-[-1%] text-[#7E7E7E] lg:max-w-[85%]"
                    >
                        FastApp aims to become a preferred mobility partner across cities by continuously improving rider experience and driver satisfaction.
                    </motion.p>

                    <div className="flex flex-col gap-4">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-haas font-bold text-[18px] leading-[28.5px] text-[#7E7E7E]"
                        >
                            We envision a future where city travel is:
                        </motion.p>
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-[16px]"
                        >
                            {visionPoints.map((point, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-[28px] h-[28px] flex items-center justify-center bg-[#1C7939] rounded-full shrink-0">
                                        <span className="text-white font-haas font-[400] text-[12px] ">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="font-haas font-medium text-[18px] leading-[31.2px] tracking-[-0.5%] text-black">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurOfficeSection;
