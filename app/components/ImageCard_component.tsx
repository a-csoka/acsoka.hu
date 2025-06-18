import React from 'react';
import { Link } from 'react-router';


type Badge = {
    Name: string,
    Color: string,
}

type Icon = {
    Name: string,
    Image: string,
}

type Link = {
    Name: string,
    Icon: string,
    To: string,
}

type Data = {
    Image: string,
    Title: string,
    SubTitle?: string,
    Description?: string,
    BottomText?: string,
    X: string,
    Y: string,
    Badges?: Badge[] | null,
    Icons?: Icon[] | null,
    Links?: Link[] | null,
};

interface Props {
    Data: Data
}

const ImageCard: React.FC<Props> = ({Data}) => {
    const {Image, Title, SubTitle, Description, BottomText, X, Y, Badges, Icons, Links } = Data

    return (
        <div className='flex flex-col bg-EerieBlack rounded-2xl shadow-2xl shadow-black'>
            <div className="relative">
                <img
                    src={Image}
                    className="rounded-t-2xl w-full h-85 object-cover"
                    style={{objectPosition: X + Y}}
                    alt={Title}
                />
                <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-EerieBlack" />
            </div>
            <div className='flex flex-col m-4 h-full'>
                <h2 className='text-xl font-Gilmer font-bold bg-gradient-to-r from-MainBlue to-LuckyGreen text-transparent bg-clip-text w-fit'>{Title}</h2>
                {SubTitle && <h3 className='text-sm font-Gilmer'>{SubTitle}</h3>}
                {Badges && <div className='grid grid-cols-4 gap-1 mt-1'>
                    {Badges.map((badge : Badge, index : number) => (
                        <span
                            key={index}
                            className="text-xs w-fit py-0.5 px-2 font-bold whitespace-nowrap rounded font-Montserrat"
                            style={{ backgroundColor: badge.Color }}
                        >
                            {badge.Name}
                        </span>
                    ))}
                </div>}
                {Icons && <div className='grid grid-cols-6 gap-0.5 mt-1'>
                    {Icons && Icons.map((icon : Icon, index : number) => (
                        <img className='h-9 aspect-square rounded-full' src={icon.Image} key={index} alt={icon.Name} />
                    ))}
                </div>}
                {Description && <p className='font-Montserrat text-sm mt-2'>{Description}</p>}
                <div className='flex-grow'/>
                {Links && <div className='flex flex-row justify-center gap-8 w-full mt-4'>
                    {Links.map((link : Link, index : number) => (
                        <Link to={link.To} key={index} target="_blank">
                            <img className='h-10 aspect-square' src={link.Icon} alt={link.Name}/>
                        </Link>
                    ))}
                </div>}
                {BottomText && <h4 className='text-xs mt-8 font-Montserrat opacity-55'>{BottomText}</h4>}
            </div>
        </div>
    );
};

export default ImageCard;