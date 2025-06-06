import React from 'react';
import { useLanguage } from '~/context/LanguageContext';

import Me from "../assets/images/Me.jpg"

const AboutMe: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div className='w-full'>
            <h1 className='text-center text-4xl font-bold font-Gilmer bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text drop-shadow-black drop-shadow-lg'>{LangContext.translations.AboutMe["header"]}</h1>
            <div className='grid grid-cols-2 w-full h-full'>
                <div className='flex flex-col justify-end items-center my-12'>
                    <div>
                        <div className='flex w-100 h-100 rounded-full bg-gradient-to-r from-MainBlue to-LuckyGreen items-center justify-center'>
                                <img
                                    src={Me}
                                    alt="Me"
                                    className="w-98.5 h-98.5 object-cover object-[0%_100%] rounded-full"
                                />
                        </div>
                        <div className='text-white text-center mt-4 text-4xl font-Montserrat text-shadow-lg text-shadow-black'>{LangContext.translations.AboutMe["name"]}</div>
                        <div className='text-white text-center mt-1 text-md font-Montserrat text-shadow-lg text-shadow-black'>{LangContext.translations.AboutMe["title"]}</div>
                    </div>
                </div>
                <div className='flex items-center font-Montserrat text-lg text-shadow-lg text-shadow-black'>
                    {LangContext.translations.AboutMe["introduction"]}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;