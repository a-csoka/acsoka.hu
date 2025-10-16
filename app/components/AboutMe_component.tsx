import React from 'react';
import { useLanguage } from '~/context/LanguageContext';

import { ContactList } from '~/assets/data/contacts';

import Me from "../assets/images/Me.png"
import SectionTitle from './SectionTitle_component';
import { Link } from 'react-router';

const AboutMe: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div id="aboutme">
            <SectionTitle>{LangContext.translations.AboutMe["header"]}</SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full'>
                <div className='flex flex-col justify-end items-center my-12'>
                    <div>
                        <div className='flex w-60 sm:w-100 aspect-square rounded-full bg-gradient-to-r from-MainBlue to-LuckyGreen items-center justify-center'>
                                <img
                                    src={Me}
                                    alt="Me"
                                    className="w-58.5 sm:w-98.5 aspect-square object-cover object-[0%_100%] rounded-full"
                                />
                        </div>
                        <div className='text-white text-center mt-4 text-4xl font-Montserrat text-shadow-lg text-shadow-black'>{LangContext.translations.AboutMe["name"]}</div>
                        <div className='text-white text-center mt-1 text-md font-Montserrat text-shadow-lg text-shadow-black'>{LangContext.translations.AboutMe["title"]}</div>
                    </div>
                    <div className='grid gap-8 sm:gap-10 grid-cols-4 w-full mt-10'>
                        {ContactList.map((contact, index) => (
                            <div className='flex flex-row justify-center'  key={index}>
                                <Link to={contact.Link} target="_blank">
                                    <img className='h-20 aspect-square' src={contact.Image} alt={contact.Name}/>
                                </Link>
                            </div>

                        ))}
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