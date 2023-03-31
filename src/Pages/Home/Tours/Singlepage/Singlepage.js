import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Lang } from '../../../../Layout/Layout';
import {useTranslation} from "react-i18next";
import './more.scss'

const Singlepag = () => {
    const {t, i18n} = useTranslation();
    const {id} = useParams();
    const [cards, setUser] = useState([{}])
    const langContext = useContext(Lang)

    const getApi = () => {
        axios.get(`https://sarymogol.com/api/tours/${id}`)
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()

    }, []);
    return (
        <div className="more bg-primary p-4">
            <Container>
                <div className="cards">
                    {
                        cards.map((item) => {
                            return (
                                <div className="col-xl-3 col-lg-6 col-sm-8 bg-light rounded p-4 mb-2" key={item.id}>
                                    <img src={item.image} alt="img" className='w-100' style={{ height: "200px" , objectFit:"cover"}} />
                                    <h3 className="text-center">{langContext.bool ? item.nameRus:item.nameEng}</h3>
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <p style={{ whiteSpace: "pre-line" }} className="text-justify">{(langContext.bool ? item.info_rus:item.info_eng)}</p>
                                    </div>
                                    {/* <p className="text-center">{item.price}</p> */}
                                    <button type="button" className="btn btn-primary d-block mx-auto">
                                        <Link className="text-light" to={`/alltours/${item.id}/more`}>{t("info.more")}</Link>
                                    </button>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </Container>
        </div>
    );
}



export default Singlepag;
