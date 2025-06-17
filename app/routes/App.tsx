import { useEffect } from 'react';
import type { Route } from './+types/App';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '~/context/LanguageContext';
import en from "../languages/en.json";
import hu from "../languages/hu.json";
import Navbar from '~/components/Navbar_component';
import AboutMe from '~/components/AboutMe_component';
import Services from '~/components/Services_component';
import Technologies from '~/components/Technologies_component';
import Qualifications from '~/components/Qualifications_component';
import Accomplishments from '~/components/Accomplishments_component';

const DefaultLanguage = "en";
const langMap = {
  en: en,
  hu: hu
} as const;
const allowedLangs = ["hu", "en"];
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
        <LanguageContext.Provider value={{ lang, translations: langJSON, allowedLangs: allowedLangs }}>
            <MetaTags title={langJSON.Meta.title} description={langJSON.Meta.description} />
            <Navbar />
            <div className='bg-[url("wp.png")] bg-cover bg-center'>
                <div className='mx-6 pt-25'>
                    <AboutMe />
                    <Services />
                </div>
                <div className='bg-gradient-to-b from-transparent to-black h-12'/>
            </div>
            <div className='bg-black pb-6'>
                <div className='mx-6'>
                    <Technologies />
                    <Qualifications />
                </div>
            </div>
            <div className='bg-gradient-to-b from-black to-transparent h-12'/>
            <div className='mx-6'>
                <Accomplishments />
            </div>
        </LanguageContext.Provider>
    );
};
export default App;