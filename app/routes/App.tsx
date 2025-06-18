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
import Projects from '~/components/Projects_component';

const DefaultLanguage = "en";
const langMap = {
  en: en,
  hu: hu
} as const;
const allowedLangs = ["hu", "en"];
type AllowedLang = keyof typeof langMap;

const MetaTags = ({ title, description, lang }: { title: string; description: string; lang:string }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="alternate" hrefLang="hu" href="https://www.acsoka.hu/hu" />
        <link rel="alternate" hrefLang="en" href="https://www.acsoka.hu/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.acsoka.hu/en" />
        <link rel="canonical" href={`https://www.acsoka.hu/${lang}`} />
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
            <div>

                <MetaTags title={langJSON.Meta.title} description={langJSON.Meta.description} lang={lang} />
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
                <div className='mx-6 pb-8'>
                    <Accomplishments />
                    <Projects />
                </div>
            </div>
        </LanguageContext.Provider>
    );
};
export default App;