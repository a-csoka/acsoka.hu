import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '~/context/LanguageContext';

const Navbar: React.FC = () => {
    const LangContext = useLanguage()
    const navigate = useNavigate()
    const language: Record<string, string> = {
        "en": "🇬🇧 English",
        "hu": "🇭🇺 Magyar"
    }

    const [selectedLang, setSelectedLang] = useState(LangContext.lang)

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value != LangContext.lang){
            navigate(`/${event.target.value}`, {replace: true});
        }
        setSelectedLang(event.target.value)
    }

    return (
        <nav className='w-full mt-2 fixed z-50'>
            <div className='w-[98.75%] h-12 mx-auto bg-gradient-to-r from-MainBlue to-LuckyGreen pt-1 rounded-md'>
                <div className='w-full h-full rounded-md bg-gray-900'>
                    <div className='flex flex-row items-center h-full w-full justify-between'>
                        <div className='font-Gilmer font-bold text-xl ml-8 bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text'>
                            ACSOKA.HU
                        </div>
                        <div className=''>
                            TODO
                        </div>
                        <div className="mr-8">
                            <select
                                name="languages"
                                id="languages"
                                value={selectedLang}
                                onChange={(e) => changeLanguage(e)}
                                className="w-32 bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 outline-none  font-Montserrat"
                                >
                                {LangContext.allowedLangs.map((lang) => (
                                <option key={lang} value={lang} className="bg-gray-800 text-white">
                                    {language[lang]}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;