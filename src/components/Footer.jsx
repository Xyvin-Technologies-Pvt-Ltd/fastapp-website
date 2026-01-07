import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const quickLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Rider App', href: '/rider-app' },
    { text: 'Driver App', href: '/driver-app' },
    { text: 'Support', href: '/support' },
  ];

  const socialLinks = [
    { text: 'Instagram', href: '#instagram' },
    { text: 'Facebook', href: '#facebook' },
    { text: 'X', href: '#twitter' },
  ];

  return (
    <footer className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px]">
        <div className="flex flex-col gap-12 lg:gap-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            <div className="flex flex-col lg:justify-between w-full lg:w-1/2 lg:min-h-[200px] gap-8 lg:gap-0">
              <div>
                <img
                  src={logo}
                  alt="FastApp Logo"
                  className="w-[128px] h-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-2 lg:mt-auto">
                <IoLocationSharp className="w-5 h-5 text-black" />
                <span className="text-base font-normal text-text-primary">
                  Sudan
                </span>
              </div>
            </div>

            <div className="flex flex-row justify-between lg:justify-end gap-16 w-full lg:w-1/2">
              <div className="flex flex-col items-start min-w-[120px]">
                <h3 className="text-base font-bold text-black mb-6">
                  Quick Links
                </h3>
                <div className="flex flex-col items-start gap-4">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="text-base font-normal text-text-primary hover:text-primary transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start min-w-[120px]">
                <h3 className="text-base font-bold text-black mb-6">
                  Social
                </h3>
                <div className="flex flex-col items-start gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-text-primary hover:text-primary transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <div className="text-center sm:text-left order-2 sm:order-1">
              <span className="text-base font-normal text-text-primary">
                &copy; 2026 Fast App. All rights reserved.
              </span>
            </div>

            <div className="text-center sm:text-right order-1 sm:order-2">
              <span className="text-base font-normal text-text-primary">
                Designed & Developed by{' '}
                <a
                  href="https://www.xyvin.com/"
                  target="_blank"
                  className="hover:text-[#2DA151]"
                >
                  Xyvin Technologies
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
