import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import TechnologyCard from './Technology-Card_component';
import SectionTitle from './SectionTitle_component';

const TechnologyList = [
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        Name: "React",
        Color: "#58c4dc"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        Name: "Svelte",
        Color: "#ff3e00"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        Name: "Tailwind CSS",
        Color: "#35bef8"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        Name: "Bootstrap",
        Color: "#7952B3"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
        Name: "C#",
        Color: "#a179dc"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        Name: "Node.js",
        Color: "#339933"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        Name: "MySQL",
        Color: "#f29111"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
        Name: "Lua",
        Color: "#000080"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
        Name: "Python",
        Color: "#FFD43B"
    },
    {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg",
        Name: "Docker",
        Color: "#2496ED"
    },

]

const Technologies: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div className='w-full'>
            <SectionTitle>{LangContext.translations.Technologies["header"]}</SectionTitle>
            <div className='relative mt-12'>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-MainBlue to-LuckyGreen mask pointer-events-none z-0" />
                <div className='grid grid-cols-4 gap-6 items-stretch relative z-10 p-6'>
                    {TechnologyList.map((tech, index) => (
                        <TechnologyCard
                            key={index}
                            Tech={tech}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;