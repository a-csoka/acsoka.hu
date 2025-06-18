import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import ServiceCard from './Service-Card_component';

import WebdevIcon from '../assets/images/icons/Webdev_icon.svg';
import DiscordBotIcon from '../assets/images/icons/DiscordBot_icon.svg';
import MTAIcon from '../assets/images/icons/MTA_icon.svg';
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
            Icon: DiscordBotIcon,
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
        <div className='pt-12' id="services">
            <SectionTitle>{LangContext.translations.Services["header"]}</SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch'>
                {ServiceList.map((service, index) => (
                    <ServiceCard key={index} Service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;