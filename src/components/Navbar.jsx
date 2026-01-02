import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Group.png'

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Rider App', path: '/rider-app' },
        { name: 'Driver App', path: '/driver-app' },
        { name: 'Support', path: '/support' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className="fixed w-full z-50 border-b transition-all duration-300"
            style={{
                background: '#FFFFFF75',
                backdropFilter: 'blur(8.399999618530273px)',
                borderColor: '#FFFFFF24'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <img src={logo} alt="FastApp Logo" className="w-[80px] md:w-[100px] h-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-7">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 text-[16px] leading-[24px] font-[500] transition-colors ${isActive(link.path) ? 'text-black' : 'text-[#9C9C9C] hover:text-emerald-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <button className=" text-white px-6 py-2.5 rounded-full ">
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/14">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-4 text-base font-medium transition-colors ${isActive(link.path) ? 'text-black bg-white/20' : 'text-[#9C9C9C] hover:text-black hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
