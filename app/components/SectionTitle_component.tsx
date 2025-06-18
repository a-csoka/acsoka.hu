import React from 'react';

const SectionTitle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
return (
    <div className='flex w-full justify-center pb-6'>
            <h1 className='text-4xl font-bold font-Gilmer bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text drop-shadow-black drop-shadow-lg'>{children}</h1>
    </div>
);
};

export default SectionTitle;