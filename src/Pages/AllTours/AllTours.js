import React from 'react';
import './tours.scss'
import Tours from '../Home/Tours/Tours';
import { Container } from 'react-bootstrap';

const AllTours = () => {
    return (
        <div className="tours">
            <div className="tours_bg">
                <h3 >All Tours</h3>
            </div>
            <Container>
                 <Tours/>
            </Container>
        </div>
    );
}

export default AllTours;
