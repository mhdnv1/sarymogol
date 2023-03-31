import React, { useEffect, useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './slider.scss'
import { useTranslation } from "react-i18next";
import { Lang } from '../../../Layout/Layout';
import {SliderContext} from '../../../App'

function SliderHome() {
  const { t } = useTranslation();
  const sliderContext = useContext(SliderContext)
  //const [cards, setUser] = useState([{}])
  //const [dataReady, setDataReady] = useState(false)
  const langContext = useContext(Lang)
 
  return (
    <Carousel className="carusel">
      {sliderContext.dataReadySlider?
      (sliderContext.slider.map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover" style={{backgroundPosition:'center'}} src={item.img} alt="First slide" loading='lazy'/>
            <Carousel.Caption>
              <h3>{langContext.bool ? item.nameRus : item.nameEng}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })):
      (<Carousel.Item>
          <img
            className="d-block w-100 " src='https://24.kg/files/media/230/230569.jpeg' alt="First slide" loading='lazy'/>
          <Carousel.Caption>
            <h3>{langContext.bool ? 'Ош' : 'Osh'}</h3>
          </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>
  );
}

export default SliderHome;