import React from 'react';
import { Container } from 'react-bootstrap';
import { SiGooglemaps } from 'react-icons/si';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import {useTranslation} from "react-i18next";
import './services.scss'
const Services = () => {
    const {t} = useTranslation();
    return (
        <div data-aos="" className="services">
              <Container>
                   <div className="row d p-4">
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <SiGooglemaps style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>{t("services.link1")}</h4>
                              <p>{t("services.link1__p")}</p>
                       </div>
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <FaMapMarkedAlt style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>{t("services.link2")}</h4>
                              <p>{t("services.link2__p")}</p>
                       </div>
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <FcLike style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>{t("services.link3")}</h4>
                              <p>{t("services.link3__p")}</p>
                       </div>
                   </div>
              </Container>
        </div>
    );
}

export default Services;
