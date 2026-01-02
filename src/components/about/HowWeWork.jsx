import React from 'react';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import women from '../../assets/images/Women.webp';
import clientsWrapper from '../../assets/images/Clients Wrapper.webp';

const HowWeWork = () => {
    const safetyPoints = [
        { text: "Verified driver onboarding" },
        { text: "Real-time trip tracking" },
        { text: "Emergency support access" },
        { text: "Secure payments" },
        { text: "Ride history & support logs" }
    ];

    return (
        <section className="py-20 px-6 md:px-20 lg:px-[120px] bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-1 font-neue font-medium text-[16px] leading-[60px] tracking-[-0.5px] text-center mb-0">
                        <span className="text-black">Safety</span>
                        <span className="text-[#ACACAC]">Comes First</span>
                    </div>
                    <h2 className="font-neue font-medium text-[40px] md:text-[48px] leading-[60px] tracking-[-0.5px] text-center">
                        Safety is at the <span className="text-[#2DA151]">heart of FastApp.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex flex-col gap-[40px] w-full lg:w-[40%]">
                        {safetyPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-[50px] h-[50px] shrink-0 border-t-[0.83px] border-[#11181133] border-x-[0.83px] border-b-[0.83px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center">
                                    <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-black" />
                                </div>
                                <span className="font-neue font-medium text-[20px] leading-[29.97px] tracking-[-0.5px] text-black">
                                    {point.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-[60%] relative">
                        <div className="overflow-hidden">
                            <img src={women} alt="Safety First" className="w-full h-full object-cover" />
                        </div>
                        <div
                            className="absolute -bottom-4 -right-4 bg-white rounded-[10px] overflow-hidden shadow-xl z-10 box-content border border-[#E5E7EB] w-[160px] h-[100px] md:w-[245px] md:h-[160px]"
                        >
                            <img
                                src={clientsWrapper}
                                alt="Clients Wrapper"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
