import React from 'react';
import { useLanguage } from '~/context/LanguageContext';

type Qualification = {
    Logo: string,
    Color: string,
    Name: string,
    Title: string,
    Date: string,
};

interface Props {
    Qualification: Qualification;
}

const QualificationCard: React.FC<Props> = ({Qualification}) => {
    const LangContext = useLanguage()
    const {Logo, Color, Name, Title, Date} = Qualification;

    return (
        <div className="w-full relative rounded-2xl p-8">
            <div
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: Color, opacity: 0.3, zIndex: 0 }}
            aria-hidden="true"
            />
            <div className="absolute inset-0 rounded-2xl  mask" style={{ zIndex: 1, backgroundColor: Color }} aria-hidden="true" />
            <div className='relative z-10'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0 items-center justify-items-center'>
                <div className='h-40 aspect-square'>
                <img src={Logo} />
                </div>
                <div className='w-full'>
                <h3 className='mx-4 text-center sm:text-left font-Gilmer text-2xl'>{Name}</h3>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-center font-Gilmer text-lg'>{LangContext.translations.Qualifications[Title]}</h3>
                <h4 className='text-center font-Gilmer text-sm'>{(Date == "" ? LangContext.translations.Qualifications["ongoing"] : Date)}</h4>
            </div>
            </div>
        </div>
    );
};

export default QualificationCard;