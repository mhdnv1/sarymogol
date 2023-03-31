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
import TabsSlider from './Tabs/Alay/alaySlider';
import { Lang} from '../../Layout/Layout';
import axios from 'axios';
import {AreasContext} from '../../App'

const Home = () => {
    const areas = useContext(AreasContext)
    const langContext = useContext(Lang)

    const [showMore, setShowMore] = useState(false)


    return (
        <div className="home">
            <SliderHome />
            <Container>
                <div data-aos="fade-right">
                    {areas.dataReadyAreas?(<Tabs
                        defaultActiveKey={`${areas.areas[0].nameEng}${areas.areas[0].id}`}
                        id="fill-tab-example"
                        className="my-2 p-2"
                        onClick={()=>setShowMore(false)}
                        fill>
                        {areas.areas.map((item) => {
                            return (
                                <Tab eventKey={`${item.nameEng}${item.id}`} title={langContext.bool ? item.nameRus : item.nameEng} >
                                    <div className="d-flex flex-wrap">
                                       <div className="col-xl-6 col-lg-12 col-sm-12  p-3">
                                       {showMore?(<p >{langContext.bool ? item.descriptionRus : item.descriptionEng}</p>):
                                        (<p>{(langContext.bool ? item.descriptionRus : item.descriptionEng).substring(0, 550)}</p>)}
                                        {((langContext.bool && item.descriptionRus.length>600)||(!langContext.bool && item.descriptionEng.length>600))?
                                        <button className='btn btn-primary' onClick={() => setShowMore(!showMore)}>...</button>
                                        :''
                                        }   
                                       </div>
                                       <div className="col-xl-6 col-lg-12 col-sm-12  px-3">
                                       <TabsSlider id={item.id}/>
                                       </div>
                                    </div>
                                </Tab>
                            )
                        })}
                    </Tabs>):
                    (<Tabs
                    defaultActiveKey="Osh"
                    activeKey="Osh"
                    id="fill-tab-example"
                    className="my-2 p-2"
                    fill>
                            <Tab eventKey='load' title='Osh'>
                                <div className="d-flex">
                                    <p className="col-6">{langContext.bool ? 'Описание' : 'Description'}</p>
                                    <img
                                        className="d-block w-100"
                                        src='https://too.kg/en/wp-content/uploads/DSC_0576-1024x681.jpg'
                                        alt="First slide"
                                        height={300}
                                    />
                                </div>
                            </Tab>
                </Tabs>)
                    
                    }
                    
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
