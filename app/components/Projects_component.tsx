import React from 'react';
import { useLanguage } from '~/context/LanguageContext';
import SectionTitle from './SectionTitle_component';
import ImageCard from './ImageCard_component';
import { ProjectList } from '~/assets/data/projects';

const Projects: React.FC = () => {
    const LangContext = useLanguage();

    return (
        <div id="projects" className='pt-12'>
            <SectionTitle>{LangContext.translations.Projects["header"]}</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {ProjectList.map(({Image, Name, Description, X, Y, Icons, Links}, index) => (
                    <ImageCard Data={{
                        Image: Image,
                        Title: Name,
                        Description: LangContext.translations.Projects[Description],
                        X: X,
                        Y: Y,
                        Icons: Icons,
                        Links: Links
                    }} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;