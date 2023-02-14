import React, { useEffect, useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './slider.scss'
import { useTranslation } from "react-i18next";
import { Lang } from '../../../Layout/Layout';

function SliderHome() {
  const { t } = useTranslation();
  const [cards, setUser] = useState([{}])
  const langContext = useContext(Lang)
  const getApi = () => {
    axios.get('https://sarymogol.com/api/mainimg')
      .then(({ data }) => setUser(data))
  }
  useEffect(() => {
    getApi()
  }, []);
  return (
    <Carousel className="carusel">
      {cards.map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <h3>{langContext.bool ? item.nameRus : item.nameEng}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default SliderHome;