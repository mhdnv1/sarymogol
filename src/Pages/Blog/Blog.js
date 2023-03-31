import React from 'react';
import { Container } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import  Services  from '../Home/Services/Services';
import Maps from '../Home/Maps/Maps'
import img1 from '../../Asets/Blog/1.jpg'
import img2 from '../../Asets/Blog/2.jpg'
import img3 from '../../Asets/Blog/3.jpg'
import img4 from '../../Asets/Blog/4.jpg'
import img5 from '../../Asets/Blog/5.jpg'
import './blog.scss'

const Blog = () => {
    const {t} = useTranslation();
    return (
        <div className="blog">
            <div className="blog__bg">
                <h3>{t("blog.blog__title")}</h3>
            </div>
            <Container>
                <br/>
                <p>{t("blog.blog__text1")}</p> <br/>
                <img style={{width:"100%"}} src={img1} alt="img" /> <br/><br/>
                <p>{t("blog.blog__text2")}</p> <br/><br/>
                <img style={{width:"100%"}} src={img2} alt="img" /> <br/><br/>
                <p>{t("blog.blog__text3")}</p> <br/><br/>
                <img style={{width:"100%"}} src={img3} alt="img" /> <br/><br/>
                <p>{t("blog.blog__text4")}</p> <br/><br/>
                <img style={{width:"100%"}} src={img4} alt="img" /> <br/><br/>
                <p>{t("blog.blog__text5")}</p> <br/><br/>
                <img style={{width:"100%"}} src={img5} alt="img" /> <br/><br/>
                <p>{t("blog.blog__text6")}</p> <br/><br/>
               <Services/>
               <Maps/>
            </Container>
        </div>

    );
}

export default Blog;
