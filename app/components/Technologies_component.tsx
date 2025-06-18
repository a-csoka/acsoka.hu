import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import TechnologyCard from './Technology-Card_component';
import SectionTitle from './SectionTitle_component';

export const TechnologyList = {
    "React": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        Color: "#58c4dc"
    },
    "Svelte": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        Color: "#ff3e00"
    },
    "Tailwind CSS": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        Color: "#35bef8"
    },
    "Bootstrap": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        Color: "#7952B3"
    },
    "C#": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
        Color: "#a179dc"
    },
    "Node.js": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        Color: "#339933"
    },
    "MySQL": {
        Icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        Color: "#f29111"
    },
    "Lua": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
        Color: "#000080"
    },
    "Python": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
        Color: "#FFD43B"
    },
    "Docker": {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg",
        Color: "#2496ED"
    },
}

const Technologies: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div className='w-full'>
            <SectionTitle>{LangContext.translations.Technologies["header"]}</SectionTitle>
            <div className='relative mt-12'>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-MainBlue to-LuckyGreen mask pointer-events-none z-0" />
                <div className='grid grid-cols-4 gap-6 items-stretch relative z-10 p-6'>
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