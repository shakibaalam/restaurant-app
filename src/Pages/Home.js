import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Pizza from '../Components/Pizza';
import Popular from '../Components/Popular';
import Serve from '../Components/Serve';
import Tasty from '../Components/Tasty';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Category></Category>
            <Serve></Serve>
            <Popular></Popular>
            <Tasty></Tasty>
            <Pizza></Pizza>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;