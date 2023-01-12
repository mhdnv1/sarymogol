import { useParams } from 'react-router-dom'
import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Lang } from '../../../../Layout/Layout';
import './more.scss'

const More = () => {
    const { id } = useParams();
    const [cards, setUser] = useState({})
    const langContext = useContext(Lang)

    const getApi = () => {
        axios.get(`http://localhost:3001/tour/${id}`)
            .then(({ data }) => setUser(data))
    }
    useEffect(() => {
        getApi()
    }, []);

            return (
                <div className="morecard">
                    <Container>
                        <div className="card">
                            <div className="bg-light rounded p-4 mb-2" key={cards.id}>
                                <img src={cards.image} alt="img" className='w-100' style={{ height: "200px" }} />
                                <h3 className="text-center">{langContext.bool ? cards.nameRus:cards.nameEng}</h3>
                                <p className="text-center">{langContext.bool ? cards.descriptionRus:cards.descriptionEng}</p>
                                <p className="text-center">{cards.price}</p>
                                <p className="text-center">{cards.size}</p>
                                <p className="text-center">{cards.address}</p>
                                <iframe style={{ width: "100%", height: "500px" }} className="gmap_iframe" src={cards.map}></iframe>
                            </div>
                        </div>      
                    </Container>
                </div>
            );
        }

export default More;
