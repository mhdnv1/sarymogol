import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../Asets/AboutUs/user.jpg'
import {useTranslation} from "react-i18next";
import './about.scss'

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        <div className="about">
            <div className="about__bg">
                <h3>{t("about.title")}</h3>
            </div>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img src='' alt='' />
                        <h4 className="text-center">{t("about.story")}</h4>
                        <p>{t("about.story__p")}</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src='' alt='' />
                        <h4 className="text-center">{t("about.mission")}</h4>
                        <p>{t("about.mission__text")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/AWQvXTu_6CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/FIK2XwLFex4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/dgwrc8Lyclo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/E9kGu-OBvRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                {/* <h3 className="text-center my-4">What to do around Sary-Mogol / CBT Sary-Mogol’s offers and services / South Kyrgyzstan</h3>
                <div className="row display">
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                </div> */}
                <h3 className="text-center my-4">{t("about.text")}</h3>
                <div className="d-flex justify-content-center p-4">
                    <div >
                        <img src={img1} alt="img" style={{width:"200px" , height:'200px'}} className='rounded' />
                        <h4 className="text-center text-dark">{t("about.author")}</h4>
                        <p className="text-center">{t("about.prof")}</p>
                    </div>
                </div>
                <h3 className="text-center">{t("about.workers")}</h3>
                <div className="row display">
                    <div className="col-12 col-sm-6 col-md-4 my-4" style={{ height: "200px" }}>
                        <img src={img1} alt="img user" style={{width:'100%' , height:'100%'}} className="rounded border-warning"/>
                        <h4 className="text-center">{t("about.author")}</h4>
                        <p className="text-center">{t("about.work")}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
