import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { Lang } from '../../Layout/Layout';
import './faqs.scss'

const Faqs = () => {
    const [cards, setUser] = useState([{}])
    const langContext = useContext(Lang)
    const { t } = useTranslation();
    const getApi = () => {
        axios.get(`http://localhost:3001/questions`)
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()

    }, []);
    return (
        <div className="faqs">
            <div className="faqs__bg">
                <h3 className="text-center">{t("header.link5")}</h3>
            </div>
            <div className="container-fluid">
                <h2 className="text-center my-4">{t("header.link5")}</h2>
                {
                    cards.map((item) => {
                        return (
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{langContext.bool ? item.question_rus:item.question_eng}</Accordion.Header>
                                    <Accordion.Body>
                                        {langContext.bool ? item.answer_rus:item.answer_eng}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}

export default Faqs;
