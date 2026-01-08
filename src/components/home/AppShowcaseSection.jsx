import image1 from '../../assets/images/appscreen1.webp';
import image2 from '../../assets/images/appscreen2.webp';
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { PiUsersThreeBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import app from '../../assets/images/appstore.webp';
const AppShowcaseSection = () => {
    const showcaseItems = [
        {
            title: "Booking & Ride",
            subtitle: "Experience",
            image: image1,
            features: [
                {
                    icon: <BiMessageRoundedDots className="w-6 h-6" />,
                    title: "Instant Ride Booking",
                    description: "Book a ride in just a few taps without waiting or complicated steps."
                },
                {
                    icon: <FiShare2 className="w-6 h-6" />,
                    title: "Live GPS Tracking",
                    description: "Track your driver's location in real time from pickup to drop-off."
                },
                {
                    icon: <FiSmile className="w-6 h-6" />,
                    title: "Accurate Pickup & Drop Locations",
                    description: "Set your exact pickup and destination points with map precision."
                },
                {
                    icon: <PiUsersThreeBold className="w-6 h-6" />,
                    title: "Estimated Time & Fare",
                    description: "Know your estimated arrival time and ride cost before confirming"
                }
            ]
        },
        {
            title: "Ready to Start Driving",
            subtitle: "with FastApp?",
            image: image2,
            features: [
                {
                    icon: <BiMessageRoundedDots className="w-6 h-6" />,
                    title: "Flexible Driving Hours",
                    description: "Go online anytime and drive on your own schedule."
                },
                {
                    icon: <FiShare2 className="w-6 h-6" />,
                    title: "Transparent Earnings",
                    description: "See trip fares, incentives, and payouts clearly in your app."
                },
                {
                    icon: <FiSmile className="w-6 h-6" />,
                    title: "Easy Trip Management",
                    description: "Accept trips, navigate routes, and complete rides with ease."
                },
                {
                    icon: <PiUsersThreeBold className="w-6 h-6" />,
                    title: "Quick & Secure Payouts",
                    description: "Receive your earnings securely with fast payouts."
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 bg-white font-neue">
            {/* First Section */}
            <div className="pb-0 md:pb-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-4 w-full flex justify-center"
                        >
                            <div className="relative w-full min-h-[400px] lg:min-h-[500px] aspect-[3/4] overflow-hidden rounded-[20px]">
                                <img
                                    src={showcaseItems[0].image}
                                    alt={showcaseItems[0].title}
                                    className="w-full h-full object-cover object-center"
                                    loading="lazy"
                                    style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                />
                            </div>
                        </motion.div>

                        <div className="lg:col-span-8 w-full">
                            <div className="max-w-full">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black mb-2 -tracking-[1px] leading-[120%] font-neue"
                                >
                                    {showcaseItems[0].title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-3xl md:text-4xl lg:text-[56px] font-medium text-[#2DA151] italic mb-10 leading-[120%] font-neue"
                                >
                                    {showcaseItems[0].subtitle}
                                </motion.p>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {showcaseItems[0].features.map((feature, fIndex) => (
                                        <motion.div
                                            key={fIndex}
                                            variants={itemVariants}
                                            whileHover={{ y: -5, shadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
                                            className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#0000001A] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col  gap-4 h-full"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-black shrink-0">
                                                    {feature.icon}
                                                </div>
                                                <h3 className="text-[20px] font-medium text-[#1A1A1A] leading-[30px] font-neue">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="text-[16px] text-[#ACACAC] font-haas font-normal leading-[120%]">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="py-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        <div className="lg:order-1 lg:col-span-8 w-full">
                            <div className="max-w-full">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black mb-2 -tracking-[1px] leading-[120%] font-neue"
                                >
                                    {showcaseItems[1].title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-3xl md:text-4xl lg:text-[56px] font-medium text-[#2DA151] italic mb-10 leading-[120%] font-neue"
                                >
                                    {showcaseItems[1].subtitle}
                                </motion.p>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {showcaseItems[1].features.map((feature, fIndex) => (
                                        <motion.div
                                            key={fIndex}
                                            variants={itemVariants}
                                            whileHover={{ y: -5 }}
                                            className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#0000001A] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col gap-4 h-full"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-black shrink-0">
                                                    {feature.icon}
                                                </div>
                                                <h3 className="text-[20px] font-medium text-[#1A1A1A] leading-[30px] font-neue">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="text-[16px] text-[#ACACAC] font-haas font-normal leading-[120%]">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:order-2 lg:col-span-4 w-full flex justify-center"
                        >
                            <div className="relative w-full min-h-[400px] lg:min-h-[500px] aspect-[3/4] overflow-hidden rounded-[20px]">
                                <img
                                    src={showcaseItems[1].image}
                                    alt={showcaseItems[1].title}
                                    className="w-full h-full object-cover object-center"
                                    loading="lazy"
                                    style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
            >
                <a href="https://play.google.com/store/apps/details?id=com.xyvin.fastdriver" target="_blank" className="flex items-center gap-3 bg-[#F4F7F9] border border-[#DDE5ED] rounded-[100px] px-8 py-3 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5126 15.1764L4.85156 3.51534C5.03541 3.42466 5.23963 3.37418 5.45156 3.37418C5.64501 3.37418 5.82902 3.41617 5.99616 3.49132L21.3749 12.2353L16.5126 15.1764Z" fill="#00E676" />
                            <path d="M21.3749 12.2355L5.99616 20.9795C5.82902 21.0547 5.64501 21.0967 5.45156 21.0967C5.23963 21.0967 5.03541 21.0462 4.85156 20.9555L16.5126 9.29443L21.3749 12.2355Z" fill="#FF3D00" />
                            <path d="M21.3749 12.2354L27.0181 15.4419C27.5181 15.726 27.5181 16.4501 27.0181 16.7342L21.3749 19.9407L16.5126 15.1764L21.3749 12.2354Z" fill="#FFC107" />
                            <path d="M4.85156 3.51534C4.74087 3.57068 4.64366 3.64571 4.5625 3.73718V28.4394C4.64366 28.5309 4.74087 28.6059 4.85156 28.6613L16.5126 17.0003L4.85156 3.51534Z" fill="#1DE9B6" />
                            <path d="M16.5126 17.0003L4.85156 28.6613C5.03541 28.752 5.23963 28.8024 5.45156 28.8024C5.64501 28.8024 5.82902 28.7605 5.99616 28.6853L21.3749 19.9413L16.5126 17.0003Z" fill="#0043F9" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#1A1A1A] leading-[13px] font-neue">Get It On</span>
                        <span className="text-[18px] font-medium text-[#1A1A1A] leading-[27px] font-neue">Google Play</span>
                    </div>
                </a>
                <a href="https://apps.apple.com/in/app/fast-app-driver/id6754153756" target="_blank" className="flex items-center gap-3 bg-[#F4F7F9] border border-[#DDE5ED] rounded-[100px] px-8 py-3 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                        <img src={app} alt="App Store" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#1A1A1A] leading-[13px] font-neue">Download on the</span>
                        <span className="text-[18px] font-medium text-[#1A1A1A] leading-[27px] font-neue">App Store</span>
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default AppShowcaseSection;
