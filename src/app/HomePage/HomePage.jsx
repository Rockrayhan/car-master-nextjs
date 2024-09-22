import React from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';

const HomePage = () => {
    return (
        <div className='mx-10 '>
            
          <div className='container'>
          <Banner/>
          <AboutUs/>
          <Services/>
          </div>

        </div>
    );
};

export default HomePage;