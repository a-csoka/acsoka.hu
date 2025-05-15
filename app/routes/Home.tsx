import { useEffect } from 'react';
import en from "../languages/en.json";
import hu from "../languages/hu.json";
import type { Route } from './+types/Home';
import { useNavigate } from 'react-router';

const langMap = {
  en: en,
  hu: hu
} as const;

const allowedLangs = ["hu", "en"] as const;
export function meta({ params }: Route.LoaderArgs) {
    const isAllowedLang = allowedLangs.includes(params.lang as typeof allowedLangs[number]);
    const langJSON = langMap[params.lang as "hu" | "en"] ?? langMap;
    if (!isAllowedLang) {
        return false
    }
  
    return [
      { title: langJSON.title },
      { name: "description", content: langJSON.description },
    ];
  }


const Home = (props : Route.LoaderArgs) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!meta(props)) {
            const language = (navigator.language).startsWith('hu') ? '/hu' : '/en';
            navigate(language, {replace: true});
        }
    }, [])

    if (meta(props) === false) return null;

    return (
        <div>
            <h1>Home</h1>
            <p>Language: {props.params.lang}</p>
        </div>
    );
}
export default Home;