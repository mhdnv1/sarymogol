import React,{useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './Header/Header';
import Home from '../Pages/Home/Home';
import AllTours from '../Pages/AllTours/AllTours'
import Info from '../Pages/Info/Info'
import Blog from '../Pages/Blog/Blog'
import Faqs from '../Pages/Faqs/Faqs'
import AboutUs from '../Pages/AboutUs/AboutUs'
import ContactUs from '../Pages/ContactUs/ContactUs'
import NotFound from '../Pages/NotFound/NotFound';
import Footer from './Footer/Footer';
import Horseback from '../Pages/Home/Tours/Horseback/Horseback';
import Kg from '../Pages/Info/Country/Kg';
import Kz from '../Pages/Info/Country/Kz';
import Uz from '../Pages/Info/Country/Uz';
import Tj from '../Pages/Info/Country/Tj';

const Layout = () => {
    const location = useLocation()
    useEffect(() => {
        Aos.init({duration:2000});
     }, []);
    return (
        <div className="layout">
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/alltours' element={<AllTours />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/info/kg' element={<Kg/>}/>
                    <Route path='/info/kz' element={<Kz/>}/>
                    <Route path='/info/uz' element={<Uz/>}/>
                    <Route path='/info/tj' element={<Tj/>}/>
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/faqs' element={<Faqs />} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/horseback' element={<Horseback />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />

        </div>
    );
}

export default Layout;
