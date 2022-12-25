import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BsFacebook, BsTwitter, BsGoogle, BsLinkedin, BsGithub } from 'react-icons/bs';
import {FaHome , FaEnvelopeOpen, FaPhoneAlt, FaPrint,FaGem} from 'react-icons/fa'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from 'react-router-dom'
import './footer.scss'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="footer__networks">
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsTwitter /></a>
          <a href="#"><BsGoogle /></a>
          <a href="#"><BsLinkedin /></a>
          <a href="#"><BsGithub /></a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <FaGem className="me-3" />
                <Link to='/'>Sarymogol</Link>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p><Link to='/alltours'>All Tours</Link></p>
              <p><Link to='/info'>Info</Link></p>
              <p><Link to='/blog'>Blog</Link></p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-8'>
              <p><Link to='/faqs'>Fags</Link></p>
              <p><Link to='/aboutus'>About Us</Link></p>
              <p><Link to='/contactus'>Contact Us</Link></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><FaHome className="me-3"/>Osh Lenina 341</p>
              <p><FaEnvelopeOpen className="me-3" />sarymogol@gmail.com</p>
              <p><FaPhoneAlt className="me-3" /> +996990000935</p>
              <p><FaPrint className="me-3" /> +996990000935</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: <br/>
        <a className='text-reset' href='https://mdbootstrap.com/'>
          muhidinovfahridin@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}