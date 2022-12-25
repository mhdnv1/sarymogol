import React from 'react';
import './tours.scss'
import { Link } from 'react-router-dom';
import img1 from '../../../Asets/Home/Tours/1.jpeg'
import img2 from '../../../Asets/Home/Tours/2.webp'
import img3 from '../../../Asets/Home/Tours/3.jpg'

const Tours = () => {
    return (
        <div data-aos="fade-right" className="tours my-4 bg-primary p-4">
            <div className="container">
                <h2 className="text-center text-light mb-5">Diversity of tourism in Kyrgyzstan</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-3 col-lg-6 col-sm-8  bg-light rounded p-4 mb-2">
                          <img src={img1} alt="img" className='w-100' style={{height:"200px"}}/>
                          <h3 className="text-center">Horseback tours</h3>
                          <p className="text-center">Osh has an important outdoor bazaar which has been</p>
                          <button type="button" className="btn btn-primary d-block mx-auto">
                            <Link className="text-light" to='/horseback'>Learn more</Link>
                            </button>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-8  bg-light rounded p-4 mb-2">
                          <img src={img2} alt="img" className='w-100' style={{height:"200px"}}/>
                          <h3 className="text-center">Alay</h3>
                          <p className="text-center">Osh has an important outdoor bazaar which has been</p>
                          <button type="button" className="btn btn-primary d-block mx-auto">
                            <Link className="text-light" to='/horseback'>Learn more</Link>
                            </button>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-8 bg-light rounded p-4 mb-2">
                          <img src={img3} alt="img" className='w-100' style={{height:"200px"}}/>
                          <h3 className="text-center">Osh</h3>
                          <p className="text-center">Osh has an important outdoor bazaar which has been</p>
                          <button type="button" className="btn btn-primary d-block mx-auto">
                            <Link className="text-light" to='/horseback'>Learn more</Link>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tours;
