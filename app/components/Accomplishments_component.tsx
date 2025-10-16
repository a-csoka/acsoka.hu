import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import ImageCard from './ImageCard_component';
import SectionTitle from './SectionTitle_component';

import Prog24_2024 from "../assets/images/accomplishments/prog24_2024.jpg";
import Techtogether_202505 from "../assets/images/accomplishments/techtogether_202505.jpg";
import Prog24_2025 from "../assets/images/accomplishments/prog24_2025.jpg";

const AccomplishmentList = [
    {
        Image: Prog24_2024,
        Name: "Prog24 2024",
        Organizer: "Pannon Egyetem",
        Date: "2024.10.08 - 2024.10.09",
        X: "50%",
        Y: "50%",
        Badges: [
            {
                Name: "3rd",
                Color: "#a97142"
            }
        ]
    },
    {
        
        Image: Techtogether_202505,
        Name: "Techtogether Automotive Hungary 2025",
        Organizer: "Autopro.hu",
        Date: "2025.05.13 - 2025.05.14",
        X: "50%",
        Y: "40%",
        Badges: [
            {
                Name: "special",
                Color: "#8A2BE2"
            }
        ]
    },
    {
        Image: Prog24_2025,
        Name: "Prog24 2025",
        Organizer: "Pannon Egyetem",
        Date: "2025.10.14 - 2025.10.15",
        X: "50%",
        Y: "50%",
        Badges: [
            {
                Name: "1st",
                Color: "#D4AF37"
            }
        ]
    },
]

const Accomplishments: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div id="accomplishments">
            <SectionTitle>{LangContext.translations.Accomplishments["header"]}</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                {AccomplishmentList.map(({ Image, Name, Organizer, Date, X, Y, Badges }, index) => (
                    <ImageCard
                        Data={{
                            Image: Image,
                            Title: Name,
                            SubTitle: Organizer,
                            BottomText: Date,
                            X: X,
                            Y: Y,
                            Badges: Badges.map(badge => ({
                                Name: LangContext.translations.Accomplishments[badge.Name],
                                Color: badge.Color,
                            })),
                        }}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accomplishments;