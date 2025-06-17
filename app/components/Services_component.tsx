import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import ServiceCard from './Service-Card_component';

import WebdevIcon from './ServiceIcons/Webdev_icon';
import DiscordIcon from './ServiceIcons/Discord_icon';
import MTAIcon from './ServiceIcons/MTA_icon';
import SectionTitle from './SectionTitle_component';

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
            <SectionTitle>{LangContext.translations.Services["header"]}</SectionTitle>
            <div className='grid grid-cols-3 gap-12 mt-12 items-stretch'>
                {ServiceList.map((service, index) => (
                    <ServiceCard key={index} Service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;