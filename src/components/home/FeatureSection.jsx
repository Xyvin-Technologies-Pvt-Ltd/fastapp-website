import image1 from '../../assets/images/img1-feat.webp';
import image2 from '../../assets/images/card-image.webp';
import image3 from '../../assets/images/CardImage3.webp';
import image4 from '../../assets/images/single-ser.webp';
import { motion } from 'framer-motion';
import image21 from '../../assets/images/feat-img1.webp';
import image22 from '../../assets/images/feat-img2.webp';
import image31 from '../../assets/images/img4.webp';

const FeatureSection = () => {
    const features = [
        {
            title: "Book a Ride in Seconds",
            description: "Instant booking with just a few taps.",
            image: image1,
        },
        {
            title: "See Fare & Arrival Time",
            description: "Upfront pricing and ETA.",
            image: image2,
        },
        {
            title: "Find the Right Ride Instantly",
            description: "Get matched with nearby drivers for faster pickups and smoother trips.",
            image: image3,
        },
        {
            title: "Search & Plan Your Ride",
            description: "Advanced ride search.",
            image: image4,
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="pt-20 pb-0 md:pb-20 px-6 md:px-12 lg:px-[120px] bg-white font-neue">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-neue text-4xl md:text-5xl lg:text-[56px] font-medium text-black mb-4 -tracking-[0.5px]">
                        Top Features of <span className="text-[#2DA151] italic">FastApp</span>
                    </h2>
                    <p className="text-[#7E7E7E] text-lg max-w-2xl mx-auto font-haas">
                        FastApp makes booking rides faster, safer, and more transparent—so you can travel with confidence.
                    </p>
                </motion.div>
                <div className="flex flex-col md:block">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <motion.div
                            custom={0}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            // whileHover={{ y: -10 }}
                            className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[480px] flex flex-col transition-shadow "
                        >
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[0].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-2 md:mb-6">
                                {features[0].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0 flex items-center justify-center p-4">
                                <img
                                    src={features[0].image}
                                    alt={features[0].title}
                                    className="w-full h-[200px] md:h-[320px] object-contain"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            // whileHover={{ y: -10 }}
                            className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[660px] flex flex-col transition-shadow "
                        >
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[1].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-2 md:mb-6">
                                {features[1].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0 bg-[#FAFAFA] p-4 flex items-end justify-center">
                                <div className="flex-1 h-[200px] md:h-[320px] flex items-center justify-center">
                                    <img
                                        src={image21}
                                        alt={features[1].title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex-1 h-[200px] md:h-[320px] flex items-center justify-center -ml-8 md:-ml-17 py-1 md:py-4">
                                    <img
                                        src={image22}
                                        alt={features[1].title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <motion.div
                            custom={2}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            // whileHover={{ y: -10 }}
                            className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-10 w-full md:w-[624px] flex flex-col transition-shadow "
                        >
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[2].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-2 md:mb-6">
                                {features[2].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0 bg-white flex items-center justify-center md:p-8 p-4">
                                <img
                                    src={image31}
                                    alt={features[2].title}
                                    className="w-full h-[200px] md:h-[320px] object-contain"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            custom={3}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            // whileHover={{ y: -10 }}
                            className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[528px] flex flex-col transition-shadow "
                        >
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[3].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-2 md:mb-6">
                                {features[3].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0 flex items-center justify-center p-4">
                                <img
                                    src={features[3].image}
                                    alt={features[3].title}
                                    className="w-full h-[200px] md:h-[320px] object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
