import React from 'react';
import { Link } from 'react-router-dom';
import './info.scss'
import './Country/country.scss'

const INfo = () => {
    return (
        <div className="info">
            <div className="info__countrys"  data-aos="fade-right">
                <div className="kg__bg">
                    <h3>Kyrgyzstan</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/kg'>more</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="kz__bg">
                    <h3>Kazakhstan</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/kz'>more</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="uz__bg">
                    <h3>Uzbekstan</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/uz'>more</Link>
                    </button>
                </div>
            </div>
            <div className="info__countrys"  data-aos="fade-right">
                <div className="tj__bg">
                    <h3>Tajikistan</h3>
                    <button className="info__btn btn btn-primary">
                        <Link to='/info/tj'>more</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default INfo;
