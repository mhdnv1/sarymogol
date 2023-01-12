import Carousel from 'react-bootstrap/Carousel';
import './slider.scss'
import img1 from '../../../Asets/Home/Slider/1.jpg'
import img2 from '../../../Asets/Home/Slider/2.jpg'
import img3 from '../../../Asets/Home/Slider/3.jpg'
import img4 from '../../../Asets/Home/Slider/4.jpg'
import img5 from '../../../Asets/Home/Slider/5.jpg'
import img6 from '../../../Asets/Home/Slider/6.jpg'
import {useTranslation} from "react-i18next";

function SliderHome() {
  const {t} = useTranslation();
  return (
    <Carousel className="carusel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
           <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
           <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
        />

        <Carousel.Caption>
           <h3>{t("slider.link1")}</h3>
          <p>{t("slider.link1__p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHome;