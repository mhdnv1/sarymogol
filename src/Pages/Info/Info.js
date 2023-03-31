import React from 'react';
import { Link } from 'react-router-dom';
import './info.scss'
import './Country/country.scss'
import {useTranslation} from "react-i18next";

const INfo = () => {
    const {t} = useTranslation();

    return (
        <div className="info">
            <div className="info__countrys"  data-aos="fade-right">
                <div className="kg__bg">
                    <h3>{t("info.kg")}</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/kg'>{t("info.more")}</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="kz__bg">
                    <h3>{t("info.kz")}</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/kz'>{t("info.more")}</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="uz__bg">
                    <h3>{t("info.uz")}</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/uz'>{t("info.more")}</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="tj__bg">
                    <h3>{t("info.tj")}</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/tj'>{t("info.more")}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default INfo;
