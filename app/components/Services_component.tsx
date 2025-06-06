import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import ServiceCard from './Service-Card_component';

import WebdevIcon from './ServiceIcons/Webdev_icon';
import DiscordIcon from './ServiceIcons/Discord_icon';
import MTAIcon from './ServiceIcons/MTA_icon';

const Services: React.FC = () => {
    const LangContext = useLanguage()
    const ServiceList = [
        {
            Icon: WebdevIcon,
            Name: LangContext.translations.Services["service_webdev_name"],
            Description: LangContext.translations.Services["service_webdev_description"],
        },        
        {
            Icon: DiscordIcon,
            Name: LangContext.translations.Services["service_discord_name"],
            Description: LangContext.translations.Services["service_discord_description"],
        },        
        {
            Icon: MTAIcon,
            Name: LangContext.translations.Services["service_mta_name"],
            Description: LangContext.translations.Services["service_mta_description"],
        },
    ]

    return (
        <div className='w-full pt-12'>
            <h1 className='text-center text-4xl font-bold font-Gilmer bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text drop-shadow-black drop-shadow-lg'>{LangContext.translations.Services["header"]}</h1>
            <div className='grid grid-cols-3 justify-between gap-12 mt-12 items-stretch'>
                {ServiceList.map((service, index) => (
                    <ServiceCard key={index} Service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;