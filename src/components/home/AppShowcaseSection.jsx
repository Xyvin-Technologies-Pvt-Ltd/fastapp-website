import image1 from '../../assets/images/appscreen1.webp';
import image2 from '../../assets/images/appscreen2.webp';
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { PiUsersThreeBold } from "react-icons/pi";

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

    return (
        <section className="py-20 bg-white font-neue">
            <div className="py-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        <div className="lg:col-span-4 w-full flex justify-center">
                            <div className="relative w-full h-full">
                                <img
                                    src={showcaseItems[0].image}
                                    alt={showcaseItems[0].title}
                                    className="w-full h-full object-cover rounded-[20px]"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-8 w-full">
                            <div className="max-w-full">
                                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black mb-2 -tracking-[1px] leading-[120%] font-neue">
                                    {showcaseItems[0].title}
                                </h2>
                                <p className="text-3xl md:text-4xl lg:text-[56px] font-medium text-[#2DA151] italic mb-10 leading-[120%] font-neue">
                                    {showcaseItems[0].subtitle}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {showcaseItems[0].features.map((feature, fIndex) => (
                                        <div key={fIndex} className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#eeeeee] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col justify-between gap-4 h-full">
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        <div className="lg:order-1 lg:col-span-8 w-full">
                            <div className="max-w-full">
                                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black mb-2 -tracking-[1px] leading-[120%] font-neue">
                                    {showcaseItems[1].title}
                                </h2>
                                <p className="text-3xl md:text-4xl lg:text-[56px] font-medium text-[#2DA151] italic mb-10 leading-[120%] font-neue">
                                    {showcaseItems[1].subtitle}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {showcaseItems[1].features.map((feature, fIndex) => (
                                        <div key={fIndex} className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,232,232,0.14)_0%,rgba(221,221,221,0.14)_100%)] border border-[#eeeeee] backdrop-blur-[10px] rounded-[20px] p-6 flex flex-col justify-between gap-4 h-full">
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-2 lg:col-span-4 w-full flex justify-center">
                            <div className="relative w-full h-full">
                                <img
                                    src={showcaseItems[1].image}
                                    alt={showcaseItems[1].title}
                                    className="w-full h-full object-cover rounded-[20px]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <a href="#" className="flex items-center gap-3 bg-[#F4F7F9] border border-[#DDE5ED] rounded-[100px] px-8 py-3 transition-all hover:bg-slate-100">
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
                <a href="#" className="flex items-center gap-3 bg-[#F4F7F9] border border-[#DDE5ED] rounded-[100px] px-8 py-3 transition-all hover:bg-slate-100">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0673 3.37418C20.6543 3.37418 18.668 4.25684 17.7012 5.4043C16.8379 6.43164 16.1113 8.04492 16.1113 9.61328C16.1113 9.83203 16.1367 10.0469 16.1826 10.252C17.6543 10.1836 19.5043 9.25586 20.4414 8.07617C21.3145 6.99414 22.0195 5.39453 22.0195 3.86914C22.0195 3.65039 21.9941 3.43555 21.9482 3.23047C21.9839 3.22637 22.0303 3.22418 22.0673 3.22418C22.0673 3.22418 22.0673 3.37418 22.0673 3.37418ZM25.8672 17.6895C25.8457 14.8555 28.2168 13.4316 28.3242 13.3633C26.9668 11.4336 24.8496 11.1719 24.1113 11.1445C22.3457 10.9727 20.627 12.1582 19.7285 12.1582C18.8223 12.1582 17.4121 11.166 15.9395 11.1914C14.0273 11.2188 12.2461 12.2773 11.2617 13.9453C9.25391 17.3203 10.748 22.3086 12.7129 25.0781C13.6875 26.4258 14.8203 27.9316 16.3125 27.8769C17.7539 27.8184 18.2812 26.9746 20.0156 26.9746C21.75 26.9746 22.25 27.8769 23.7656 27.8516C25.3086 27.8223 26.2773 26.4844 27.2344 25.1094C28.3516 23.5137 28.8027 21.9648 28.8223 21.8867C28.7891 21.873 25.8984 20.7969 25.8672 17.6895Z" fill="#1A1A1A" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#1A1A1A] leading-[13px] font-neue">Download on the</span>
                        <span className="text-[18px] font-medium text-[#1A1A1A] leading-[27px] font-neue">App Store</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default AppShowcaseSection;