import React from 'react';
import Banner from '../Banner/Banner';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';
import PopularInstructorsSection from '../PopularInstructorsSection/PopularInstructorsSection';
import RelevantSection from '../RelevantSection/RelevantSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorsSection></PopularInstructorsSection>
            <RelevantSection></RelevantSection>
        </div>
    );
};

export default Home;