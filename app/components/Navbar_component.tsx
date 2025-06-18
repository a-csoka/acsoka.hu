import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '~/context/LanguageContext';
import { Squash as Hamburger } from 'hamburger-react'

const NavOptions = [
    { Name: "AboutMe", To: "aboutme" },
    { Name: "Services", To: "services" },
    { Name: "Technologies", To: "technologies" },
    { Name: "Qualifications", To: "qualifications" },
    { Name: "Accomplishments", To: "accomplishments" },
    { Name: "Projects", To: "projects" },
];

const Navbar: React.FC = () => {
    const LangContext = useLanguage();
    const navigate = useNavigate();
    const language: Record<string, string> = {
        "en": "🇬🇧 English",
        "hu": "🇭🇺 Magyar"
    };

    const [selectedLang, setSelectedLang] = useState(LangContext.lang);
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value !== LangContext.lang) {
            navigate(`/${event.target.value}`, { replace: true });
        }
        setSelectedLang(event.target.value);
        setIsOpen(false); // Close menu after language change
    };

    const handleNavClick = (to: string) => {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className='w-full mt-2 fixed z-50'>
            <div className='w-[98.75%] h-12 mx-auto bg-gradient-to-r from-MainBlue to-LuckyGreen pt-0.5 rounded-lg'>
                <div className={'w-full h-full bg-gray-900 flex items-center justify-between px-4 '+(isOpen ? "rounded-t-lg" : "rounded-lg")}>
                    <div className='font-Gilmer font-bold text-xl bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text'>
                        ACSOKA.HU
                    </div>

                    <div className='hidden xl:grid grid-cols-6 gap-2'>
                        {NavOptions.map((option) => (
                            <a
                                key={option.Name}
                                href={"#" + option.To}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(option.To);
                                }}
                                className="flex items-center justify-center px-4 py-2 font-Gilmer text-white hover:text-LuckyGreen transition-colors"
                            >
                                {LangContext.translations[option.Name]["header"]}
                            </a>
                        ))}
                    </div>

                    <div className="hidden xl:block">
                        <select
                            name="languages"
                            id="languages"
                            value={selectedLang}
                            onChange={changeLanguage}
                            className="w-32 bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 outline-none font-Gilmer"
                        >
                            {LangContext.allowedLangs.map((lang) => (
                                <option key={lang} value={lang} label={language[lang]} className="bg-gray-800 text-white">
                                    {language[lang]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='xl:hidden'>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color="#fff" />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="xl:hidden w-[98.75%] mx-auto bg-gray-900 rounded-b-lg p-4 flex flex-col items-center space-y-4">
                    {NavOptions.map((option) => (
                        <button
                            key={option.Name}
                            onClick={() => handleNavClick(option.To)}
                            className="font-Gilmer text-white hover:text-LuckyGreen transition-colors"
                        >
                            {LangContext.translations[option.Name]["header"]}
                        </button>
                    ))}
                    <select
                        name="languages"
                        id="languages"
                        value={selectedLang}
                        onChange={changeLanguage}
                        className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 outline-none font-Gilmer"
                    >
                        {LangContext.allowedLangs.map((lang) => (
                            <option key={lang} value={lang} className="bg-gray-800 text-white">
                                {language[lang]}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
