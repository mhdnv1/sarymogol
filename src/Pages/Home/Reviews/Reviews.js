import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Asets/Home/Reviews/1.jpg'
import img2 from '../../../Asets/Home/Reviews/2.jpg'
import img3 from '../../../Asets/Home/Reviews/3.jpg'

function Reviews() {
  return (
   <div data-aos="fade-up" data-aos-duration="3000">
     <h3 className="text-center my-4">Customer Feedback</h3>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          style={{objectFit:"cover", height:"500px"}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-light">First slide label</h5>
          <p className="text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h5 className="text-light">Second slide label</h5>
          <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h5 className="text-light">Third slide label</h5>
          <p className="text-light">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Reviews;