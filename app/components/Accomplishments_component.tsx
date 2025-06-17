import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import AccomplishmentCard from './Accomplishment-Card_component';
import SectionTitle from './SectionTitle_component';

const AccomplishmentList = [
    {
        Image: "https://mik.uni-pannon.hu/images/phocagallery/Prog24%202024/thumbs/phoca_thumb_l_prog24-36.jpg",
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
        
        Image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/497696764_1172292421576345_837464630495266056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4KtisOMfgdQQ7kNvwHU1pIG&_nc_oc=Adml4FsXSRmFaGQdFoCroUf6ylTFXIWHR4nMkj3mVWs0dZHmbY9fGITMcQk3gdmmlb7XpCbUHNeFeBwcYkVOLx_j&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=ZBkqzrbegTXAxWovdPCVhg&oh=00_AfOkv5Is7ARF5U3AjbO4eawW0a9iQER2qSrN9JYnyFTNyw&oe=68577B44",
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
    }
]

const Accomplishments: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div className=''>
            <SectionTitle>{LangContext.translations.Accomplishments["header"]}</SectionTitle>
            <div className='grid grid-cols-4 pt-4 gap-16'>
                {AccomplishmentList.map((element, index) => (
                    <AccomplishmentCard Accomplishment={element} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Accomplishments;