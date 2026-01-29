import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLanguage = i18n.language === 'ar' ? 'عربي' : 'English';

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center cursor-pointer gap-2 focus:outline-none px-2 py-1 ${isOpen ? 'text-[#2DA151]' : 'text-gray-700 hover:text-[#2DA151]'}`}
            >
                <span className="text-base font-medium">{currentLanguage}</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full end-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${i18n.language === 'en' ? 'text-[#2DA151] font-medium' : 'text-gray-700'
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('ar')}
                        className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${i18n.language === 'ar' ? 'text-[#2DA151] font-medium' : 'text-gray-700'
                            }`}
                    >
                        عربي
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
