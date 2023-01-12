import React from 'react';
import { Container } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import  Services  from '../Home/Services/Services';
import Maps from '../Home/Maps/Maps'
import './blog.scss'

const Blog = () => {
    const {t} = useTranslation();
    return (
        <div className="blog">
            <div className="blog__bg">
                <h3>{t("blog.blog__title")}</h3>
            </div>
            <Container>
               <Services/>
               <Maps/>
            </Container>
        </div>

    );
}

export default Blog;
