import React from 'react';
import './maps.scss'
import {useTranslation} from "react-i18next";

const Maps = () => {
    const {t} = useTranslation();
    return (
        <div data-aos="" className="maps">
            <h2 className="text-center text-dark fs-7">{t("maps.title")}</h2>
            <p>{t("maps.text")}</p>
            <iframe style={{ width: "100%", height: "500px" }} className="gmap_iframe" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6153342.335028221!2d70.2537363091751!3d41.144093480046784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2z0JrRi9GA0LPRi9C30YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1679930541242!5m2!1sru!2skg'></iframe>
        </div>
    );
    
}

export default Maps;
