import React from 'react'
import AboutHero from '../Components/aboutHero';
import AboutSection from '../Components/aboutSection';
import AboutPopularProduct from '../Components/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page