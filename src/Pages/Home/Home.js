import React, { useEffect, useState, useContext } from 'react';
import SliderHome from './Slider/Slider';
import './home.scss'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tours from './Tours/Tours';
import Services from './Services/Services';
import Maps from './Maps/Maps';
import Gallery from './Gallery/Gallery';
// import Reviews from './Reviews/Reviews';
import { useTranslation } from "react-i18next";
import { Lang } from '../../Layout/Layout';
import axios from 'axios';
import TabsSlider from './Tabs/Alay/alaySlider';

const Home = () => {
    const [cards, setUser] = useState([{}])
    const { t, i18n } = useTranslation();
    const langContext = useContext(Lang)

    const getApi = () => {
        axios.get('https://sarymogol.com/api/areas')
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()

    }, []);
    return (
        <div className="home">
            <SliderHome />
            <Container>
                <div data-aos="fade-right">
                    <Tabs
                        defaultActiveKey="Osh"
                        id="fill-tab-example"
                        className="my-2 p-2"
                        fill>
                        {cards.map((item) => {
                            return (
                                <Tab eventKey={langContext.bool ? item.nameRus : item.nameEng} title={langContext.bool ? item.nameRus : item.nameEng}>
                                    <div className="d-flex~">
                                        <p className="col-6">{langContext.bool ? item.descriptionRus : item.descriptionEng}</p>
                                        <TabsSlider className='col-6'/>
                                    </div>
                                </Tab>
                            )
                        })}
                    </Tabs>
                    <br />
                </div>
            </Container>
            <Tours />
            <Container>
                <Services />
                <Maps />
                <Gallery />
                {/* <Reviews/> */}
            </Container>
        </div>
    );
}

export default Home;
