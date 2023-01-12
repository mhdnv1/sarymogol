import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Asets/Home/Reviews/1.JPG'
import img2 from '../../../Asets/Home/Reviews/2.JPG'
import img3 from '../../../Asets/Home/Reviews/3.JPG'
import {useTranslation} from "react-i18next";

function Reviews() {
  const {t} = useTranslation();

  return (
   <div data-aos="fade-up" data-aos-duration="3000">
     <h3 className="text-center my-4">{t("Reviews.title")}</h3>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          style={{objectFit:"cover", height:"500px"}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-light">{t("Reviews.user1")}</h5>
          <p className="text-light">{t("Reviews.user1_p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          style={{objectFit:"cover", height:"500px"}}         
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="text-light">{t("Reviews.user2")}</h5>
          <p className="text-light">{t("Reviews.user1_p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          style={{objectFit:"cover", height:"500px"}}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="text-light">{t("Reviews.user3")}</h5>
          <p className="text-light">{t("Reviews.user1_p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Reviews;