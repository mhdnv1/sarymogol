import { useParams } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Lang } from '../../../../Layout/Layout';
import parse from 'html-react-parser';
import './more.scss'

const More = () => {
    const parse = require('html-react-parser');
    const { id } = useParams();
    const [cards, setUser] = useState({})
    const langContext = useContext(Lang)

    const getApi = () => {
        axios.get(`https://sarymogol.com/api/tour/${id}`)
            .then(({ data }) => {
                console.log(data)
                setUser(data)
                console.log(data)
            })

    }
    useEffect(() => {
        getApi()
    }, []);
    return (
        <div className="morecard">
            <Container>
                <div className="card">
                    <div className="bg-light rounded p-4 mb-2" key={cards.id}>
                        <div>
                            <Carousel>
                                  <Carousel.Item>
                                    <img   
                                    className="d-block w-100 object-fit-contain"
                                    style={{ backgroundPosition: 'center',height:"auto" }} 
                                    src={cards.image} alt="First slide" loading='lazy' />
                                </Carousel.Item>

                                {(cards!=null&&cards.imgs!=null&&cards.imgs.length>0)?cards.imgs.map((item) =>{
                                    return(
                                    <Carousel.Item>
                                    <img
                                    
                                    className="d-block w-100 object-fit-cover"
                                    style={{ backgroundPosition: 'center',height:"400px" }} 
                                    src={item} alt="First slide" loading='lazy' /> 
                                    </Carousel.Item>
                                    )}
                                ):''}

                                
                            </Carousel>
                        </div>
                        <br/>
                        <h3 className="text-center">{langContext.bool ? cards.nameRus : cards.nameEng}</h3>
                        <b><p style={{ whiteSpace: "pre-line" }} className="text-center">{langContext.bool ? cards.descriptionRus : cards.descriptionEng}</p></b><br />
                        {/* <p style={{ whiteSpace: "pre-line" }} className="text-center">{langContext.bool ? cards.info_rus : cards.info_eng}</p> */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <i><p style={{ whiteSpace: "pre-line" }} className="text-justify">{(langContext.bool ? cards.info_rus : cards.info_eng)}</p></i>
                        </div>
                        <p className="text-center">{cards.address}</p>
                        <h3 className='text-center'>{langContext.bool ? 'Карта маршрута' : 'Map of the trek'}</h3>
                        <div className='d-flex justify-content-center w-100 mx-auto'>{parse(`<div>${cards.map}</div>`)}</div>
                        <br />

                        <h3 className='text-center p-4'>{langContext.bool ? 'Видео' : 'Videos'}</h3>
                        <div style={{ display: "flex" }}>

                            {parse(`<div className='fff'}>${cards.videos}</div>`)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default More;
