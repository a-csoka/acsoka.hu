import { TechnologyList } from '../../components/Technologies_component';

import WebIcon from '../images/icons/Web_icon.svg';
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
                Icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+Cgk8ZyBmaWxsPSJub25lIj4KCQk8ZyBjbGlwLXBhdGg9InVybCgjYWthckljb25zR2l0aHViRmlsbDApIj4KCQkJPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMEM1LjM3IDAgMCA1LjM3IDAgMTJjMCA1LjMxIDMuNDM1IDkuNzk1IDguMjA1IDExLjM4NWMuNi4xMDUuODI1LS4yNTUuODI1LS41N2MwLS4yODUtLjAxNS0xLjIzLS4wMTUtMi4yMzVjLTMuMDE1LjU1NS0zLjc5NS0uNzM1LTQuMDM1LTEuNDFjLS4xMzUtLjM0NS0uNzItMS40MS0xLjIzLTEuNjk1Yy0uNDItLjIyNS0xLjAyLS43OC0uMDE1LS43OTVjLjk0NS0uMDE1IDEuNjIuODcgMS44NDUgMS4yM2MxLjA4IDEuODE1IDIuODA1IDEuMzA1IDMuNDk1Ljk5Yy4xMDUtLjc4LjQyLTEuMzA1Ljc2NS0xLjYwNWMtMi42Ny0uMy01LjQ2LTEuMzM1LTUuNDYtNS45MjVjMC0xLjMwNS40NjUtMi4zODUgMS4yMy0zLjIyNWMtLjEyLS4zLS41NC0xLjUzLjEyLTMuMThjMCAwIDEuMDA1LS4zMTUgMy4zIDEuMjNjLjk2LS4yNyAxLjk4LS40MDUgMy0uNDA1czIuMDQuMTM1IDMgLjQwNWMyLjI5NS0xLjU2IDMuMy0xLjIzIDMuMy0xLjIzYy42NiAxLjY1LjI0IDIuODguMTIgMy4xOGMuNzY1Ljg0IDEuMjMgMS45MDUgMS4yMyAzLjIyNWMwIDQuNjA1LTIuODA1IDUuNjI1LTUuNDc1IDUuOTI1Yy40MzUuMzc1LjgxIDEuMDk1LjgxIDIuMjJjMCAxLjYwNS0uMDE1IDIuODk1LS4wMTUgMy4zYzAgLjMxNS4yMjUuNjkuODI1LjU3QTEyLjAyIDEyLjAyIDAgMCAwIDI0IDEyYzAtNi42My01LjM3LTEyLTEyLTEyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPC9nPgoJCTxkZWZzPgoJCQk8Y2xpcFBhdGggaWQ9ImFrYXJJY29uc0dpdGh1YkZpbGwwIj4KCQkJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiIC8+CgkJCTwvY2xpcFBhdGg+CgkJPC9kZWZzPgoJPC9nPgo8L3N2Zz4=",
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
                Icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+Cgk8ZyBmaWxsPSJub25lIj4KCQk8ZyBjbGlwLXBhdGg9InVybCgjYWthckljb25zR2l0aHViRmlsbDApIj4KCQkJPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMEM1LjM3IDAgMCA1LjM3IDAgMTJjMCA1LjMxIDMuNDM1IDkuNzk1IDguMjA1IDExLjM4NWMuNi4xMDUuODI1LS4yNTUuODI1LS41N2MwLS4yODUtLjAxNS0xLjIzLS4wMTUtMi4yMzVjLTMuMDE1LjU1NS0zLjc5NS0uNzM1LTQuMDM1LTEuNDFjLS4xMzUtLjM0NS0uNzItMS40MS0xLjIzLTEuNjk1Yy0uNDItLjIyNS0xLjAyLS43OC0uMDE1LS43OTVjLjk0NS0uMDE1IDEuNjIuODcgMS44NDUgMS4yM2MxLjA4IDEuODE1IDIuODA1IDEuMzA1IDMuNDk1Ljk5Yy4xMDUtLjc4LjQyLTEuMzA1Ljc2NS0xLjYwNWMtMi42Ny0uMy01LjQ2LTEuMzM1LTUuNDYtNS45MjVjMC0xLjMwNS40NjUtMi4zODUgMS4yMy0zLjIyNWMtLjEyLS4zLS41NC0xLjUzLjEyLTMuMThjMCAwIDEuMDA1LS4zMTUgMy4zIDEuMjNjLjk2LS4yNyAxLjk4LS40MDUgMy0uNDA1czIuMDQuMTM1IDMgLjQwNWMyLjI5NS0xLjU2IDMuMy0xLjIzIDMuMy0xLjIzYy42NiAxLjY1LjI0IDIuODguMTIgMy4xOGMuNzY1Ljg0IDEuMjMgMS45MDUgMS4yMyAzLjIyNWMwIDQuNjA1LTIuODA1IDUuNjI1LTUuNDc1IDUuOTI1Yy40MzUuMzc1LjgxIDEuMDk1LjgxIDIuMjJjMCAxLjYwNS0uMDE1IDIuODk1LS4wMTUgMy4zYzAgLjMxNS4yMjUuNjkuODI1LjU3QTEyLjAyIDEyLjAyIDAgMCAwIDI0IDEyYzAtNi42My01LjM3LTEyLTEyLTEyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPC9nPgoJCTxkZWZzPgoJCQk8Y2xpcFBhdGggaWQ9ImFrYXJJY29uc0dpdGh1YkZpbGwwIj4KCQkJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiIC8+CgkJCTwvY2xpcFBhdGg+CgkJPC9kZWZzPgoJPC9nPgo8L3N2Zz4=",
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
                Icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMTk5Ij4KCTxwYXRoIGZpbGw9IiM1ODY1ZjIiIGQ9Ik0yMTYuODU2IDE2LjU5N0EyMDguNSAyMDguNSAwIDAgMCAxNjQuMDQyIDBjLTIuMjc1IDQuMTEzLTQuOTMzIDkuNjQ1LTYuNzY2IDE0LjA0NnEtMjkuNTM4LTQuNDQyLTU4LjUzMyAwYy0xLjgzMi00LjQtNC41NS05LjkzMy02Ljg0Ni0xNC4wNDZhMjA3LjggMjA3LjggMCAwIDAtNTIuODU1IDE2LjYzOEM1LjYxOCA2Ny4xNDctMy40NDMgMTE2LjQgMS4wODcgMTY0Ljk1NmMyMi4xNjkgMTYuNTU1IDQzLjY1MyAyNi42MTIgNjQuNzc1IDMzLjE5M0ExNjEgMTYxIDAgMCAwIDc5LjczNSAxNzUuM2ExMzYuNCAxMzYuNCAwIDAgMS0yMS44NDYtMTAuNjMyYTEwOSAxMDkgMCAwIDAgNS4zNTYtNC4yMzdjNDIuMTIyIDE5LjcwMiA4Ny44OSAxOS43MDIgMTI5LjUxIDBhMTMyIDEzMiAwIDAgMCA1LjM1NSA0LjIzN2ExMzYgMTM2IDAgMCAxLTIxLjg4NiAxMC42NTNjNC4wMDYgOC4wMiA4LjYzOCAxNS42NyAxMy44NzMgMjIuODQ4YzIxLjE0Mi02LjU4IDQyLjY0Ni0xNi42MzcgNjQuODE1LTMzLjIxM2M1LjMxNi01Ni4yODgtOS4wOC0xMDUuMDktMzguMDU2LTE0OC4zNk04NS40NzQgMTM1LjA5NWMtMTIuNjQ1IDAtMjMuMDE1LTExLjgwNS0yMy4wMTUtMjYuMThzMTAuMTQ5LTI2LjIgMjMuMDE1LTI2LjJzMjMuMjM2IDExLjgwNCAyMy4wMTUgMjYuMmMuMDIgMTQuMzc1LTEwLjE0OCAyNi4xOC0yMy4wMTUgMjYuMThtODUuMDUxIDBjLTEyLjY0NSAwLTIzLjAxNC0xMS44MDUtMjMuMDE0LTI2LjE4czEwLjE0OC0yNi4yIDIzLjAxNC0yNi4yYzEyLjg2NyAwIDIzLjIzNiAxMS44MDQgMjMuMDE1IDI2LjJjMCAxNC4zNzUtMTAuMTQ4IDI2LjE4LTIzLjAxNSAyNi4xOCIgLz4KPC9zdmc+",
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
                Icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+Cgk8ZyBmaWxsPSJub25lIj4KCQk8ZyBjbGlwLXBhdGg9InVybCgjYWthckljb25zR2l0aHViRmlsbDApIj4KCQkJPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMEM1LjM3IDAgMCA1LjM3IDAgMTJjMCA1LjMxIDMuNDM1IDkuNzk1IDguMjA1IDExLjM4NWMuNi4xMDUuODI1LS4yNTUuODI1LS41N2MwLS4yODUtLjAxNS0xLjIzLS4wMTUtMi4yMzVjLTMuMDE1LjU1NS0zLjc5NS0uNzM1LTQuMDM1LTEuNDFjLS4xMzUtLjM0NS0uNzItMS40MS0xLjIzLTEuNjk1Yy0uNDItLjIyNS0xLjAyLS43OC0uMDE1LS43OTVjLjk0NS0uMDE1IDEuNjIuODcgMS44NDUgMS4yM2MxLjA4IDEuODE1IDIuODA1IDEuMzA1IDMuNDk1Ljk5Yy4xMDUtLjc4LjQyLTEuMzA1Ljc2NS0xLjYwNWMtMi42Ny0uMy01LjQ2LTEuMzM1LTUuNDYtNS45MjVjMC0xLjMwNS40NjUtMi4zODUgMS4yMy0zLjIyNWMtLjEyLS4zLS41NC0xLjUzLjEyLTMuMThjMCAwIDEuMDA1LS4zMTUgMy4zIDEuMjNjLjk2LS4yNyAxLjk4LS40MDUgMy0uNDA1czIuMDQuMTM1IDMgLjQwNWMyLjI5NS0xLjU2IDMuMy0xLjIzIDMuMy0xLjIzYy42NiAxLjY1LjI0IDIuODguMTIgMy4xOGMuNzY1Ljg0IDEuMjMgMS45MDUgMS4yMyAzLjIyNWMwIDQuNjA1LTIuODA1IDUuNjI1LTUuNDc1IDUuOTI1Yy40MzUuMzc1LjgxIDEuMDk1LjgxIDIuMjJjMCAxLjYwNS0uMDE1IDIuODk1LS4wMTUgMy4zYzAgLjMxNS4yMjUuNjkuODI1LjU3QTEyLjAyIDEyLjAyIDAgMCAwIDI0IDEyYzAtNi42My01LjM3LTEyLTEyLTEyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPC9nPgoJCTxkZWZzPgoJCQk8Y2xpcFBhdGggaWQ9ImFrYXJJY29uc0dpdGh1YkZpbGwwIj4KCQkJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiIC8+CgkJCTwvY2xpcFBhdGg+CgkJPC9kZWZzPgoJPC9nPgo8L3N2Zz4=",
                To: "https://github.com/a-csoka/acsoka.hu"
            },
        ]
    }
]