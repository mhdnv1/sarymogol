import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BsFacebook, BsTwitter, BsGoogle, BsLinkedin, BsGithub } from 'react-icons/bs';
import {FaHome , FaEnvelopeOpen, FaPhoneAlt, FaPrint,FaGem} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useTranslation} from "react-i18next";
import './footer.scss'

export default function Footer() {
  const {t} = useTranslation();
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer mt-4'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>{t("footer.networks")}:</span>
        </div>

        <div className="footer__networks">
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsTwitter /></a>
          <a href="#"><BsGoogle /></a>
          <a href="#"><BsLinkedin /></a>
          {/* <a href="#"><BsGithub /></a> */}
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
              {t("footer.footer__description")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p><Link to='/alltours'>{t("header.link2")}</Link></p>
              <p><Link to='/info'>{t("header.link3.link3_title")}</Link></p>
              <p><Link to='/blog'>{t("header.link4")}</Link></p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-8'>
              <p><Link to='/faqs'>{t("header.link5")}</Link></p>
              <p><Link to='/aboutus'>{t("header.link6")}</Link></p>
              <p><Link to='/contactus'>{t("header.link7")}</Link></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t("header.link7")}</h6>
              <p><FaHome className="me-3"/>{t("footer.footer__address")}</p>
              <p><FaEnvelopeOpen className="me-3" />sarymogol@gmail.com</p>
              <p><FaPhoneAlt className="me-3" /> +996990000935</p>
              <p><FaPrint className="me-3" /> +996990000935</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 {t("footer.copyright")}: <br/>
        <a className='text-reset' href='mailto:coderunkg@gmail.com'>
          coderunkg.@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}