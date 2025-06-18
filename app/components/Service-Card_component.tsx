import React from 'react';

type Service = {
    Icon: string;
    Name: string;
    Description: string;
};

interface Props {
    Service: Service;
}

const ServiceCard: React.FC<Props> = ({ Service }) => {
    const { Icon, Name, Description } = Service;

    return (
        <div className="flex flex-col items-center relative w-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-MainBlue to-LuckyGreen mask" />
            <div className='flex items-center h-54 aspect-square my-6 z-10'>
                <img src={Icon} alt={Name} />
            </div>
            <h2 className='font-Gilmer font-bold mx-12 text-2xl text-center z-10'>{Name}</h2>
            <p className='font-Montserrat text-sm mx-12 my-4 text-center z-10'>{Description}</p>
        </div>
    );
};

export default ServiceCard;