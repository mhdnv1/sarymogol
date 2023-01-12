import React from 'react';
import SliderHome from './Slider/Slider';
import './home.scss'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Osh from './Tabs/Osh/Osh';
import Alay from './Tabs/Alay/Alay';
import SaryMogol from './Tabs/Sarymogol/Sarymogol';
import Tours from './Tours/Tours';
import Services from './Services/Services';
import Maps from './Maps/Maps';
import Gallery from './Gallery/Gallery';
import Reviews from './Reviews/Reviews';
import {useTranslation} from "react-i18next";


const Home = () => {
    const {t} = useTranslation();
    return (
        <div className="home">
            <SliderHome/>
                <Container>
                <div data-aos="fade-right">
                <Tabs
                    defaultActiveKey="Osh"
                    id="fill-tab-example"
                    className="my-2 p-2"
                    fill>
                    <Tab eventKey="Osh" title={t("tabs.osh__title")}>
                        <Osh />
                    </Tab>
                    <Tab eventKey="Alay" title={t("tabs.alay__title")}>
                        <Alay/>
                    </Tab>
                    <Tab eventKey="Sary Mogol" title={t("tabs.sarymogol__title")} >
                        <SaryMogol />
                    </Tab>
                </Tabs>
                <br/>
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
