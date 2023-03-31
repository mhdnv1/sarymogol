import React , {useEffect, useState} from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../Asets/Home/Slider/1.jpg'
import img2 from '../../../Asets/Home/Slider/2.jpg'
import img3 from '../../../Asets/Home/Slider/3.jpg'
import img4 from '../../../Asets/Home/Slider/4.jpg'
import img5 from '../../../Asets/Home/Slider/5.jpg'
import img6 from '../../../Asets/Home/Slider/6.jpg'
import {useTranslation} from "react-i18next";

const Gallery = () => {
    const {t} = useTranslation();
    const [cards, setUser] = useState([{}])
    const getApi = () => {
        axios.get('https://sarymogol.com/api/mainimg')
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()
    }, []);

    return (
        <div data-aos="zoom-in-down">
        <h3 className="text-center my-4">{t("Gallery")}</h3>
        <Carousel>
        
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
    </Carousel>
    </div>
    );
}

export default Gallery;
