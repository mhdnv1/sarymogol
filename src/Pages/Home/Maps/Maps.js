import React from 'react';
import './maps.scss'
import {useTranslation} from "react-i18next";

const Maps = () => {
    const {t} = useTranslation();
    return (
        <div data-aos="" className="maps">
            <h2 className="text-center text-dark fs-7">{t("maps.title")}</h2>
            <p>{t("maps.text")}</p>
            <iframe style={{ width: "100%", height: "500px" }} className="gmap_iframe" src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=osh&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
        </div>
    );
    
}

export default Maps;
