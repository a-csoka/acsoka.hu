import React from 'react';
import { useLanguage } from '~/context/LanguageContext';

type Badge = {
    Name: string,
    Color: string,
}

type Accomplishment = {
    Image: string,
    Name: string,
    Organizer: string,
    Date: string,
    X: string,
    Y: string,
    Badges: Badge[]
};

interface Props {
    Accomplishment: Accomplishment
}

const AccomplishmentCard: React.FC<Props> = ({Accomplishment}) => {
    const LangContext = useLanguage()
    const {Image, Name, Organizer, Date, X, Y, Badges } = Accomplishment

    return (
        <div className='flex flex-col bg-EerieBlack rounded-2xl shadow-2xl shadow-black'>
            <div className="relative">
                <img
                    src={Image}
                    className="rounded-t-2xl w-full h-85 object-cover"
                    style={{objectPosition: X + Y}}
                />
                <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-EerieBlack" />
            </div>
            <div className='flex flex-col m-4 h-full'>
                <h2 className='text-xl font-Gilmer font-bold bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text w-fit'>{Name}</h2>
                <h3 className='text-sm font-Gilmer'>{Organizer}</h3>
                <div className='grid grid-cols-4 gap-1 mt-1'>
                    {Badges.map((badge, index) => (
                        <span
                            key={index}
                            className="text-xs w-fit py-0.5 px-2 font-bold whitespace-nowrap rounded font-Montserrat"
                            style={{ backgroundColor: badge.Color }}
                        >
                            {LangContext.translations.Accomplishments[badge.Name]}
                        </span>
                    ))}
                </div>
                <div className='flex-grow'/>
                <h4 className='text-xs mt-8 font-Montserrat opacity-55'>{Date}</h4>
            </div>
        </div>
    );
};

export default AccomplishmentCard;