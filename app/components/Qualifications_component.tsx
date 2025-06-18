import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import QualificationCard from './Qualification-Card_component';
import SectionTitle from './SectionTitle_component';

const QualificationsList = [
    {
        Logo: "https://vas-nadasdy.cms.intezmeny.edir.hu/uploads/Nadasdy_Logo_2020_Technikum_KOZEPES_bec1a30946.png",
        Color: "#1f376a",
        Name: "VMSZC Nádasdy Tamás Technikum és Kollégium",
        Title: "comptech",
        Date: "2022. 06. 16.",
    },
    {
        Logo: "https://vas-nadasdy.cms.intezmeny.edir.hu/uploads/Nadasdy_Logo_2020_Technikum_KOZEPES_bec1a30946.png",
        Color: "#1f376a",
        Name: "VMSZC Nádasdy Tamás Technikum és Kollégium",
        Title: "softdev",
        Date: "2023. 05. 31.",
    },
    {
        Logo: "https://pen.uni-pannon.hu/wp-content/uploads/2023/04/PE_cimer_nev_alatta.png",
        Color: "#6f1494",
        Name: "Pannon Egyetem Műszaki Informatikai Kar",
        Title: "compsci",
        Date: "",
    },
]

const Qualifications: React.FC = () => {
    const LangContext = useLanguage()

    return (
        <div className='pt-12'>
            <SectionTitle>{LangContext.translations.Qualifications["header"]}</SectionTitle>
            <div className="grid grid-cols1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {QualificationsList.map((element, index) => (
                    <QualificationCard Qualification={element} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Qualifications;