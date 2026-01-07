
import image1 from '../../assets/images/Container.webp';
import image2 from '../../assets/images/Container (1).webp';
import image3 from '../../assets/images/Container (2).webp';
import bg from '../../assets/images/homebg.png'
import { PiLightbulbFilamentLight } from "react-icons/pi";


const FastAppWorks = () => {


    return (
        <section className="pb-20 px-6 md:px-12 lg:px-[120px] bg-white font-neue">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex items-center bg-[#F4F7F9] gap-2 px-4 py-2 border rounded-full border-gray-200 mb-6 group ">
                    <PiLightbulbFilamentLight className="text-xl text-[#0D0D0D] " />
                    <span className="text-[14px] font-medium text-[#0D0D0D]">How FastApp Works</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[62px] font-semibold text-[#0D0D0D] text-center mb-6 !leading-[1.1]">
                    Get a Ride in Just a <span className="text-[#2DA151] italic">Few Steps</span>
                </h2>

                <p className="max-w-2xl text-center mb-16 font-haas" style={{
                    color: '#7E7E7E',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '27px',
                    textAlign: 'center'
                }}>
                    Follow these simple steps to book your ride  and reach your <br /> destination with ease.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {[
                        { title: "Sign Up & Set Your Location", image: image1 },
                        { title: "Choose Your Ride & Confirm", image: image2 },
                        { title: "Track Your Driver & Go", image: image3 }
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="rounded-[32px] overflow-hidden flex flex-col items-center pt-10"
                            style={{
                                background: `
                                    linear-gradient(209.02deg, #F8FAFC 12.88%, rgba(248, 250, 252, 0) 100%),
                                    linear-gradient(180deg, rgba(73, 186, 108, 0) 0%, rgba(73, 186, 108, 0.2) 100%),
                                    url(${bg})
                                `,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '1px solid #E2E8F0',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <h3 className="text-[21px] font-semibold text-[#1A1A1A] px-8 text-center mb-8">
                                {step.title}
                            </h3>
                            <div className="w-full flex justify-center">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full max-w-[280px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FastAppWorks;