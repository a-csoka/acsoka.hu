import { useEffect } from 'react';
import type { Route } from './+types/App';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '~/context/LanguageContext';
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

const App = (props: Route.LoaderArgs) => {
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

    const lang = props.params.lang as AllowedLang;
    const langJSON = langMap[props.params.lang as AllowedLang];

    return (
        <LanguageContext.Provider value={{ lang, translations: langJSON }}>
            <MetaTags title={langJSON.Meta.title} description={langJSON.Meta.description} />
            <h1>{langJSON.Meta.title}</h1>
            <p>Language: {props.params.lang}</p>
        </LanguageContext.Provider>
    );
};
export default App;