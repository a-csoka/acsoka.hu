import React from 'react';

type TechnologyCardProps = {
    Icon: string;
    Name: string;
    Color: string;
}

interface Props {
    Tech: TechnologyCardProps;
}

const TechnologyCard: React.FC<Props> = ({ Tech }) => {
    const { Icon, Name, Color } = Tech;

    return (
        <div
            className={`relative w-full rounded-2xl border-2 overflow-hidden`}
            style={{ borderColor: Color }}
        >
            <div className="absolute inset-0 -z-10" style={{ backgroundColor: Color, opacity: 0.1 }} />
            <div className='flex justify-center w-full h-30 my-6 aspect-square p-2'>
                <img src={Icon} alt={Name} />
            </div>
            <h2 className='font-Gilmer font-bold text-4xl my-6 text-center'>{Name}</h2>
        </div>
    );
};

export default TechnologyCard;