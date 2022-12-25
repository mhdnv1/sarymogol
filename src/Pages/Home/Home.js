import React from 'react';
import SliderHome from './Slider/Slider';
import './home.scss'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Osh from './Tabs/Osh';
import Tours from './Tours/Tours';
import Services from './Services/Services';
import Maps from './Maps/Maps';
import Gallery from './Gallery/Gallery';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div className="home">
            <SliderHome/>
                <Container>
                <div data-aos="fade-right">
                <Tabs
                    defaultActiveKey="Osh"
                    id="fill-tab-example"
                    className="my-2"
                    fill>
                    <Tab eventKey="Osh" title="Osh">
                        <Osh />
                    </Tab>
                    <Tab eventKey="Alay" title="Alay">
                        <Osh />
                    </Tab>
                    <Tab eventKey="Sary-Chelek" title="Sary-Chelek">
                        <Osh />
                    </Tab>
                    <Tab eventKey="Sary Mogol" title="Sary Mogol" >
                        <Osh />
                    </Tab>
                </Tabs>
                </div>
                </Container>
                <Tours/>
                <Container>
                    <Services/>
                    <Maps/>
                    <Gallery/>
                    <Reviews/>
                </Container>
        </div>
    );
}

export default Home;
