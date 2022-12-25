import React from 'react';
import { Container } from 'react-bootstrap';
import { SiGooglemaps } from 'react-icons/si';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import './services.scss'
const Services = () => {
    return (
        <div data-aos="" className="services">
              <Container>
                   <div className="row d p-4">
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <SiGooglemaps style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>50+ Different Tours</h4>
                              <p>Cool sary mogol tours! You never get bored with us!</p>
                       </div>
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <FaMapMarkedAlt style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>Beautiful Places</h4>
                              <p>Morbi semper fames lobortis ac hac penatibus</p>
                       </div>
                       <div className='col-xl-4 col-sm-12 text-center'>
                              <FcLike style={{fontSize:"50px"}} className='d-block mx-auto my-3'/>
                              <h4>Unforgettable adventures</h4>
                              <p>Morbi semper fames lobortis ac hac penatibus</p>
                       </div>
                   </div>
              </Container>
        </div>
    );
}

export default Services;
