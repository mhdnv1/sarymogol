import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function TabsSlider() {
  const [cards, setUser] = useState([{}])
  const { id } = useParams();
  const getApi = () => {
    axios.get(`https://sarymogol.com/api/areas/2`)
      .then(({ data }) => setUser(data))
  }
  useEffect(() => {
    getApi()
  }, []);
  return (
    <Carousel>
      {
        cards.map((item) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.img}
                alt="First slide"
                height={300}
              />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default TabsSlider;