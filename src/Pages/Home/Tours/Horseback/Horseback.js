import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './horseback.scss'

const Horseback = () => {
    const [cards, setUser] = useState([{}])
    const getApi = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()

    }, []);
    return (
        <div className="horseback">
            <Container>
                <div className="cards">
                    {
                        cards.map((item) => {
                            return (
                                <div className="card" key={item.id}>
                                    <img src={item.image} alt='img' />
                                    <h5>{item.title}</h5>
                                    <h6>{item.price}$</h6>
                                    <i>{item.description}</i>
                                    <p>{item.category}</p>
                                    <button></button>
                              </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
}



export default Horseback;
