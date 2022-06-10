import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Banner from '../Home/Banner';
import Project from '../Projects/Project';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Homepage;