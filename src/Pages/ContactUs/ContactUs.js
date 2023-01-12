import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import './contact.scss'
import { useNavigate } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import Maps from '../Home/Maps/Maps';
import {useTranslation} from "react-i18next";



const ContactUs = () => {
    const navigate = useNavigate()
    const {t} = useTranslation();
    const {
        register,
        handleSubmit,
        setError,
        reset
    } = useForm()

    const registerUser = (data) => {
        axios.post('http://localhost:3001/clients', { ...data })
            .then((res) => {
                navigate('/')
                alert('Отправлено')
            })
    }
    return (
        <div className="contact">
            <div className="contact__bg">
                <h3>{t("contact.title")}</h3>
            </div>
            <Container>
                <h1 className="text-center mt-4">{t("contact.title__text")}</h1>
                <p className="text-center">{t("contact.title__text__p")}</p>
                <div className="row display">
                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className="registration">
                            <form className="form" onSubmit={handleSubmit(registerUser)}>
                                <h1>{t("contact.send")}</h1>
                                <input required {...register('email')} type="email" placeholder='email' /><br />
                                <input required {...register('name')} type="text" placeholder='name' /><br />
                                <input required {...register('tel')} type="tel" placeholder='phone' /><br />
                                <textarea required {...register('message')} type='text' placeholder='message'></textarea>
                                <button type='submit' className="btn btn-primary d-block mx-auto my-4">{t("contact.submit")}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="whatsapp">
                            <span><a href="https://wa.me/+996990000935"><BsWhatsapp className='w-icon' /></a></span>
                        </div>
                    </div>
                </div>
                <span className="text-center d-block">Email</span>
                <h5 className="text-center "><a href="mailto:sarymogol@gmail.com">sarymogol@gmail.com</a></h5>
                <span className="text-center d-block">{t("contact.address")}</span>
                <h5 className="text-center">{t("contact.address__text")}</h5>
                <Maps />
            </Container>
        </div>
    );
}

export default ContactUs;




