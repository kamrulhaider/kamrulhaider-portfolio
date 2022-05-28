import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import shape1 from '../../../images/shape2.png';
import shape2 from '../../../images/logo192.png';

const Home = () => {
    return (
        <div className="container">
            <img className='shape4' src={shape1} alt="" />
            <img className='shape5' src={shape2} alt="" />
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;