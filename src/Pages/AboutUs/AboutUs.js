import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../Asets/AboutUs/user.jpg'
import img2 from '../../Asets/AboutUs/user2.jpg'
import img3 from '../../Asets/AboutUs/user3.jpg'
import img4 from '../../Asets/AboutUs/user4.jpg'
import './about.scss'

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about__bg">
                <h3>About</h3>
            </div>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img src='' alt='' />
                        <h4 className="text-center">Our Story</h4>
                        <p>The touristic center of Alay and Chon-Alay is Sary Mogol village, which is located in front of Lenin Peak and alpine-color lake Tulpar Kol. This is a vast diverse landscape of tourism. Arriving in the summer and the Alay Valley meets you with lush green challenges, illuminated by the bright sun and with fresh mountain air and yurt accommodations. The perfect place for trekking adventures. As the seasons change, the valley turns into a rich winter landscape, surrounded by high mountain peaks – optimal conditions for ski freeriding.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src='' alt='' />
                        <h4 className="text-center">Our mission</h4>
                        <p>For travelers who come from Tajikistan or China or those who are moving to one of these countries. we have an amazing opportunity to spend the night in the yurt at the shore Tulpar Kol alpine lake and see Lenin Peak (7134m) at close range and see the picturesque landscapes of Alay valley.

                            Alay and Chon Alay area are located in the far south- west of Kyrgyzstan and bordered on Tajikistan (Pamir- Highway through Kyzyl-Art; 30km) with China (Erkeshtam border; 100km) and also have an ideal access through Osh to Sary-Mogol. From/or to Uzbekistan (via Dostuk)

                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/AWQvXTu_6CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/FIK2XwLFex4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/dgwrc8Lyclo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-2">
                        <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/E9kGu-OBvRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <h3 className="text-center my-4">What to do around Sary-Mogol / CBT Sary-Mogol’s offers and services / South Kyrgyzstan</h3>
                <div className="row display">
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                    <div className="col-12 col-sm-6 col-md-4 border border-primary" style={{ height: "200px" }}></div>
                </div>
                <h3 className="text-center my-4">"If off-the-beaten-track is what you’re searching for, you’ve found it by us<br /> If you are interested in a trip to the southern area of Kyrgyzstan, you need to get to Sary Mogol from here started off all the active, scenic and adventurous travels."</h3>
                <div className="d-flex justify-content-center p-4">
                    <div >
                        <img src={img1} alt="img" style={{width:"200px" , height:'200px'}} className='rounded' />
                        <h4 className="text-center text-dark">Abdilla Salamatov</h4>
                        <p className="text-center">Founder</p>
                    </div>
                </div>
                <h3 className="text-center">Sary Mogol's team</h3>
                <div className="row display">
                    <div className="col-12 col-sm-6 col-md-4" style={{ height: "200px" }}>
                        <img src={img1} alt="img user" style={{width:'100%' , height:'100%'}} className="rounded border-warning"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={{ height: "200px" }}>
                        <img src={img2} alt="img user" style={{width:'100%' , height:'100%'}} className="rounded border-warning"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={{ height: "200px" }}>
                        <img src={img3} alt="img user" style={{width:'100%' , height:'100%'}} className="rounded border-warning"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={{ height: "200px" }}>
                        <img src={img4} alt="img user" style={{width:'100%' , height:'100%'}} className="rounded border-warning"/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
