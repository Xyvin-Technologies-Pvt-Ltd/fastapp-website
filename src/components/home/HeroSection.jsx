import React from 'react';
import HeroImage from '../../assets/images/herosection.jpg';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";


const HeroSection = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                <div className="absolute inset-0 "
                    style={{
                        background:
                        "linear-gradient(181.47deg, rgba(0,0,0,0) 15.32%, rgba(0,0,0,0.7) 84.29%)"
                    }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white ">
                <h1 className="font-neue font-bold text-center align-middle tracking-tight drop-shadow-xl
                        text-4xl leading-[1.2] -tracking-[0.8px] mb-[9px]
                        md:text-6xl
                        lg:text-[60px]
                    ">Book Rides in Minutes <br />With <span className="text-[#2DA151] italic">FastApp</span>
                </h1>

                <p className="font-neue font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30.6px] text-center">
                    Get affordable rides with live tracking and easy payments.
                </p>
                <p className="font-neue font-normal text-[16px] mb-[9px] md:text-[18px] leading-[26px] md:leading-[30.6px] text-center">
                    Fast, Safe Rides — Anytime, Anywhere
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="sm:w-auto flex items-center justify-center gap-2 bg-white text-black border-gray-300 px-6 py-3 rounded-[100px] text-[16px] leading-[27.2px] font-[700] font-sans hover:bg-gray-100 transition">
                        <FaApple className="text-[24px]" />
                        App Store
                    </button>
                    <button className="sm:w-auto flex items-center justify-center gap-2 bg-white text-black  border-gray-300 px-5 py-3 rounded-[100px] text-[16px] leading-[27.2px] font-[700] font-sans hover:bg-gray-100 transition">
                        <FaGooglePlay className="text-[20px]" />Google Play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
