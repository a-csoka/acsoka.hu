import { useEffect } from 'react';
import type { Route } from './+types/Home';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import en from "../languages/en.json";
import hu from "../languages/hu.json";

const DefaultLanguage = "en";
const langMap = {
  en: en,
  hu: hu
} as const;
const allowedLangs = ["hu", "en"] as const;
type AllowedLang = keyof typeof langMap;

const MetaTags = ({ title, description }: { title: string; description: string }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
);

const Home = (props: Route.LoaderArgs) => {
    const navigate = useNavigate();
    const isAllowedLang = allowedLangs.includes(props.params.lang as AllowedLang);

    useEffect(() => {
        if (!isAllowedLang) {
            const language = navigator.language.startsWith('hu') 
                ? '/hu' 
                : `/${DefaultLanguage}`;
            navigate(language, { replace: true });
        }
    }, [isAllowedLang, navigate]);

    if (!isAllowedLang) {
        return <p>Redirecting...</p>;
    }

    const langJSON = langMap[props.params.lang as AllowedLang];

    return (
        <div>
            <MetaTags title={langJSON.title} description={langJSON.description} />
            <h1>{langJSON.title}</h1>
            <p>Language: {props.params.lang}</p>
        </div>
    );
};
export default Home;