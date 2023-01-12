import React, { useEffect, useState, useContext } from 'react';
import './tours.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import { FaLanguage } from 'react-icons/fa';
import { Lang } from '../../../Layout/Layout';


const Tours = () => {
    const [cards, setUser] = useState([{}])
    const {t, i18n} = useTranslation();
    const langContext = useContext(Lang)
    
    const getApi = () => {
        axios.get('http://localhost:3001/menus')
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()

    }, []);

    return (
        <div data-aos="fade-right" className="tours  bg-primary p-4">
            <Container>
                <h2 className="text-center text-light mb-5">{t("alltours.text")}</h2>
                <div className="row d-flex justify-content-center">
                    {
                        cards.map((item) => {
                            return (
                                <div key={item.id} className="col-xl-3 col-lg-6 col-sm-8  bg-light rounded p-4 mb-2">
                                    <img src={item.image} alt="img" className='w-100' style={{ height: "200px" }} />
                                    <h3 className="text-center">{langContext.bool ? item.nameRus : item.nameEng}</h3>
                                    <p className="text-center">{langContext.bool ?item.descriptionRus : item.descriptionEng}</p>
                                    <button type="button" id={item.id} className="btn btn-primary d-block mx-auto">
                                    <Link className="text-light" to={`/alltours/${item.id}`} >{t("info.more")}</Link>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
}

export default Tours;
