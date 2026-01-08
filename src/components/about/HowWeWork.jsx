import React from 'react';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import women from '../../assets/images/Women.webp';
import clientsWrapper from '../../assets/images/Clients Wrapper.webp';
import { motion } from 'framer-motion';
import vector from '../../assets/images/Vector.webp';

const HowWeWork = () => {
    const safetyPoints = [
        { text: "Verified driver onboarding" },
        { text: "Real-time trip tracking" },
        { text: "Emergency support access" },
        { text: "Secure payments" },
        { text: "Ride history & support logs" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const pointVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="py-20 px-6 md:px-20 lg:px-[120px] bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-16"
                >
                    <div className="flex items-center gap-1 font-neue font-medium text-[16px] leading-[60px] tracking-[-0.5px] text-center mb-0">
                        <span className="text-black">Safety</span>
                        <span className="text-[#ACACAC]">Comes First</span>
                    </div>
                    <h2 className="font-neue font-medium text-[40px] md:text-[48px] leading-[60px] tracking-[-0.5px] text-center">
                        Safety is at the <span className="text-[#2DA151] italic">heart of FastApp.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-[40px] w-full lg:w-[40%]"
                    >
                        {safetyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={pointVariants}
                                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                className="flex items-center gap-4 cursor-default"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                                    className="w-[50px] h-[50px] shrink-0 border-t-[0.83px] border-[#11181133] border-x-[0.83px] border-b-[0.83px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center transition-colors"
                                >
                                    <img src={vector} alt="Icon" className="w-5 h-5 text-black" />
                                </motion.div>
                                <span className="font-neue font-medium text-[20px] leading-[29.97px] tracking-[-0.5px] text-black">
                                    {point.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="w-full lg:w-[60%] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden rounded-2xl"
                        >
                            <img src={women} alt="Safety First" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -bottom-4 -right-4 bg-white rounded-[10px] overflow-hidden shadow-xl z-10 box-content border border-[#E5E7EB] w-[160px] h-[100px] md:w-[245px] md:h-[160px]"
                        >
                            <img
                                src={clientsWrapper}
                                alt="Clients Wrapper"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
