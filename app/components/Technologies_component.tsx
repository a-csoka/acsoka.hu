import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import TechnologyCard from './Technology-Card_component';
import SectionTitle from './SectionTitle_component';
import { TechnologyList } from '~/assets/data/technologies';

const Technologies: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div id="technologies">
            <SectionTitle>{LangContext.translations.Technologies["header"]}</SectionTitle>
            <div className='relative'>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-MainBlue to-LuckyGreen mask pointer-events-none z-0" />
                <div className='grid gric-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch relative z-10 p-6'>
                    {Object.entries(TechnologyList).map(([name, tech], index) => (
                        <TechnologyCard
                            key={index}
                            Tech={{
                                Name: name,
                                Icon: tech.Icon,
                                Color: tech.Color
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;