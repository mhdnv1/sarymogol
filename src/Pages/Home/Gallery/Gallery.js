import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../Asets/Home/Slider/1.jpg'
import img2 from '../../../Asets/Home/Slider/2.jpg'
import img3 from '../../../Asets/Home/Slider/3.jpg'
import img4 from '../../../Asets/Home/Slider/4.jpg'
import img5 from '../../../Asets/Home/Slider/5.jpg'
import img6 from '../../../Asets/Home/Slider/6.jpg'

const Gallery = () => {
    return (
        <div data-aos="zoom-in-down">
        <h3 className="text-center my-4">Trending Destinations</h3>
        <Carousel>
        
        <div>
            <img src={img1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img4} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img5} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img6} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img4} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img5} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img6} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    </div>
    );
}

export default Gallery;
