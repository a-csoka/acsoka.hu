import { TechnologyList } from './technologies';

import WebIcon from '../images/icons/Web_icon.svg';
import DiscordIcon from '../images/icons/Discord_icon.svg';
import GitHubIcon from "../images/icons/GitHub_icon.svg"

import CANopener_Image from "../images/projects/CANopener.png"
import ReserveIt_Image from "../images/projects/ReserveIt.png"
import DBLock_Image from "../images/projects/DBLock.png"
import MHP_Image from "../images/projects/MHP.png"
import ACsoka_Image from "../images/projects/acsoka.png"

export const ProjectList = [
    {
        Image: CANopener_Image,
        Name: "CANopener - Frontend",
        Description: "canopener",
        X: "50%",
        Y: "50%",
        Icons: [
            {
                Name: "React",
                Image: TechnologyList["React"].Icon
            },
            {
                Name: "Tailwind CSS",
                Image: TechnologyList["Tailwind CSS"].Icon
            },
        ],
        Links: [
            {
                Name: "Demo",
                Icon: WebIcon,
                To: "https://designv2.d1wwea14nsaage.amplifyapp.com"
            },
            {
                Name: "GitHub",
                Icon: GitHubIcon,
                To: "https://github.com/a-csoka/CANopener-Frontend"
            },
        ]
    },
    {
        Image: ReserveIt_Image,
        Name: "ReserveIt",
        Description: "reserveit",
        X: "50%",
        Y: "50%",
        Icons: [
            {
                Name: "React",
                Image: TechnologyList["React"].Icon
            },
            {
                Name: "Node.js",
                Image: TechnologyList["Node.js"].Icon
            },
            {
                Name: "MySQK",
                Image: TechnologyList["MySQL"].Icon
            },
        ],
        Links: [
            {
                Name: "GitHub",
                Icon: GitHubIcon,
                To: "https://github.com/a-csoka/ReserveIt"
            },
        ]
    },
    {
        Image: DBLock_Image,
        Name: "DBLock",
        Description: "dblock",
        X: "50%",
        Y: "50%",
        Icons: [
            {
                Name: "Svelte",
                Image: TechnologyList["Svelte"].Icon
            },
            {
                Name: "Bootstrap",
                Image: TechnologyList["Bootstrap"].Icon
            },
        ],
    },
    {
        Image: MHP_Image,
        Name: "Magyar Hot Pursuit",
        Description: "mhp",
        X: "50%",
        Y: "50%",
        Icons: [
            {
                Name: "Lua",
                Image: TechnologyList["Lua"].Icon
            },
            {
                Name: "MySQL",
                Image: TechnologyList["MySQL"].Icon
            },
            {
                Name: "Node.js",
                Image: TechnologyList["Node.js"].Icon
            },
        ],
        Links: [
            {
                Name: "Discord",
                Icon: DiscordIcon,
                To: "https://discord.com/invite/x3FTPXn8KU"
            },
        ]
    },
    {
        Image: ACsoka_Image,
        Name: "acsoka.hu",
        Description: "acsoka",
        X: "50%",
        Y: "50%",
        Icons: [
            {
                Name: "React",
                Image: TechnologyList["React"].Icon
            },
            {
                Name: "Tailwind CSS",
                Image: TechnologyList["Tailwind CSS"].Icon
            },
        ],
        Links: [
            {
                Name: "Demo",
                Icon: WebIcon,
                To: "https://www.acsoka.hu/"
            },
            {
                Name: "GitHub",
                Icon: GitHubIcon,
                To: "https://github.com/a-csoka/acsoka.hu"
            },
        ]
    }
]