import React from 'react';
import SaryMogolSlider from './saryMogolSlider'
import '../tabs.scss'
import {useTranslation} from "react-i18next";

const SaryMogol = () => {
   const {t} = useTranslation();
    return (
       <div className="conatiner">
         <div className="row">
           <div className="col-xl-6 col-lg-12">
           <p>
           {t("tabs.sarymogol")}
            </p>
           </div>
           <div className="col-xl-6 col-lg-12">
              <SaryMogolSlider/>
           </div>
        </div>
       </div>
    );
}

export default SaryMogol;
