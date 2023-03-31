import React from 'react';
import './tours.scss'
import Tours from '../Home/Tours/Tours';
import { Container } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const AllTours = () => {
    const {t} = useTranslation();

    return (
        <div className="tours">
            <div className="tours_bg">
                <h3>{t("alltours.title")}</h3>
            </div>
            <Tours/>
            {/* <Container>
                 
            </Container> */}
        </div>
    );
}

export default AllTours;
