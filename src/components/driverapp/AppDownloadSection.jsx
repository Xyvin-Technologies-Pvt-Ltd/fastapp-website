import image from '../../assets/images/Sub Container.webp'
import scanner1 from '../../assets/images/scanner1.webp'
import scanner2 from '../../assets/images/scanner2.webp'
import { IoIosArrowRoundForward } from 'react-icons/io';

const AppDownloadSection = () => {


  const downloadLinks = [
    {
      title: 'Download from App Store',
      qrCode: scanner1,
    },
    {
      title: 'Download from Play Store',
      qrCode: scanner2,
    }
  ];

  return (
    <section className="w-full py-0 px-4 bg-white sm:px-6 lg:px-[56px] pt-[27px] sm:pt-[32px] lg:pt-[36px] pb-[42px] sm:pb-[49px] lg:pb-[56px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[37px] sm:gap-[44px] lg:gap-[50px] items-center">
          <div className="flex flex-col gap-[83px] sm:gap-[97px] lg:gap-[110px] items-center w-full sm:w-[80%] lg:w-[66%]">
            <div className="flex flex-col gap-2 items-center px-4 sm:px-[72px] lg:px-[82px]">
              <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[38px] sm:leading-[50px] lg:leading-[57px] text-center text-text-secondary">
                <span>Get Where You are </span>
                <span>Going — </span>
                <span className="italic text-[#2ca050]">Faster & Smarter</span>
              </h2>

              <p className="text-lg font-medium leading-[27px] text-center text-text-accent w-full">
Book rides instantly with real-time tracking, transparent pricing, and trusted drivers — all in one app.            
              </p>
            </div>

            <div className="flex gap-[22px] sm:gap-[26px] lg:gap-[30px] items-end w-full justify-center">
              <img src={image} alt="" className="w-[80%] sm:w-full lg:w-[85%]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 w-[60%] items-center justify-center">
            {downloadLinks?.map((link, index) => (
              <div key={index} className="w-full sm:w-auto">
                <div className="bg-[#FAFAFA] rounded-md p-[4px] sm:p-[5px] lg:p-[6px] flex items-end w-full sm:w-[318px]">
                  <div className="flex items-start gap-3 w-full p-1 sm:p-[2px] lg:p-[6px]">
                    <img
                      src={link?.qrCode}
                      alt="QR Code"
                      className="w-[63px] sm:w-[74px] lg:w-[84px] h-[63px] sm:h-[74px] lg:h-[84px] mb-[4px] sm:mb-[5px] lg:mb-[6px]"
                    />

                    <div className="flex flex-col justify-center flex-1 ml-3 sm:ml-4">
                      <span className="text-sm sm:text-base font-medium leading-[18px] sm:leading-[20px] text-text-primary">
                        {link?.title}
                      </span>
                      <span className="text-[9px] sm:text-xs font-normal leading-[11px] sm:leading-[12px] text-text-primary mt-1">
                        Scan to download
                      </span>
                      <div className="flex justify-end mt-1">
                        <IoIosArrowRoundForward className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;