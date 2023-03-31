import React from 'react';
import { Container } from 'react-bootstrap';
import './country.scss'
import {useTranslation} from "react-i18next";

const Kg = () => {
    const {t} = useTranslation();

    return (
        <div className="country">
            <div className="kg__bg">
                <h3>{t("info.kg")}</h3>
            </div>
            <Container>
                <p>{t("info.text")}</p>     
            </Container>
        </div>
    );
}

export default Kg;
