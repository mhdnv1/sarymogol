import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function TabsSlider(props) {
  const [cards, setUser] = useState([{}])
  const [dataReady, setDataReady] = useState(false)
  const { id } = useParams();
  const getApi = () => {
    console.log(props.id, 'id')
    axios.get(`https://sarymogol.com/api/areas/${props.id}`)
      .then(({ data }) => 
      {
        setUser(data)
        setDataReady(true)
      })
  }
  useEffect(() => {
    getApi()
  }, []);
  return (
    <Carousel>
      {dataReady?
      (
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
      ):
      (<Carousel.Item>
        <img
          className="d-block w-100"
          src='https://too.kg/en/wp-content/uploads/DSC_0576-1024x681.jpg'
          alt="First slide"
          height={300}
        />
      </Carousel.Item>)}
    </Carousel>
  );
}

export default TabsSlider;