import React, { Fragment } from 'react';
import Header from '../Home/Header/Header';
import Navs from '../Home/Navbar/Navs';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';
import Srev from './Services/Serv';

const Home = () => {
    return (
        <Fragment>
            <Navs />
            <Header />
            <Srev />
            <Banner />
            <Pricing />
        </Fragment>
    );
}

export default Home;