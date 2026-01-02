import image1 from '../../assets/images/splash-screens.webp';
import image2 from '../../assets/images/card-image.webp';
import image3 from '../../assets/images/cardimage3.webp';
import image4 from '../../assets/images/single-ser.webp';

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

    return (
        <section className="pt-20 pb-0 md:pb-20 px-6 md:px-12 lg:px-[120px] bg-white font-neue">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-black mb-4 -tracking-[0.8px]">
                        Top Features of <span className="text-[#2DA151] italic">FastApp</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        FastApp makes booking rides faster, safer, and more transparent—so you can travel with confidence.
                    </p>
                </div>
                <div className="flex flex-col md:block">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[480px] flex flex-col">
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[0].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-6">
                                {features[0].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0">
                                <img
                                    src={features[0].image}
                                    alt={features[0].title}
                                    className="w-full h-[280px] md:h-[320px] object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[660px] flex flex-col">
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[1].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-6">
                                {features[1].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0">
                                <img
                                    src={features[1].image}
                                    alt={features[1].title}
                                    className="w-full h-[280px] md:h-[320px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[624px] flex flex-col">
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[2].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-6">
                                {features[2].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0">
                                <img
                                    src={features[2].image}
                                    alt={features[2].title}
                                    className="w-full h-[280px] md:h-[320px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="bg-[#F8F8F8] rounded-[32px] p-6 md:p-8 w-full md:w-[528px] flex flex-col">
                            <h3 className="font-neue font-medium text-[24px] leading-[33.6px] tracking-[-0.5px] text-[#1A1A1A] mb-3">
                                {features[3].title}
                            </h3>
                            <p className="font-plus-jakarta font-normal text-[16px] leading-[27.2px] text-[#7E7E7E] mb-6">
                                {features[3].description}
                            </p>
                            <div className="w-full overflow-hidden rounded-2xl flex-shrink-0">
                                <img
                                    src={features[3].image}
                                    alt={features[3].title}
                                    className="w-full h-[280px] md:h-[320px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;