import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../../Asets/Home/Tabs/Sarymogol/1.jpg'
import img2 from '../../../../Asets/Home/Tabs/Sarymogol/2.jpg'
import img3 from '../../../../Asets/Home/Tabs/Sarymogol/3.jpg'

function SaryMogolSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          height={300}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          height={300}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          height={300}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SaryMogolSlider;