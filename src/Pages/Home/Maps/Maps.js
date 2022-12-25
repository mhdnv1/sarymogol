import React from 'react';
import './maps.scss'

const Maps = () => {
    return (
        <div data-aos="flip-left" className="maps">
            <h3 className="text-center">Combine with a Pamir Highway Tour</h3>
            <p>If you are interested in continuing on the Pamir Highway to or from Tajikistan we can easily combine this trekking tour with one of our other Pamir Highway tours. This will allow you to experience the best of the Alay Mountains and the Pamir Highway together in an easy, seamless way.</p>
            <iframe style={{ width: "100%", height: "500px" }} className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=osh&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    );
}

export default Maps;
