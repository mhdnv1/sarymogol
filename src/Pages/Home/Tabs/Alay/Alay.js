import React from 'react';
import '../tabs.scss'
import {useTranslation} from "react-i18next";
import AlaySlider from './alaySlider';

const Alay = () => {
   const {t} = useTranslation();
    return (
       <div className="conatiner">
         <div className="row">
           <div className="col-xl-6 col-lg-12">
           <p>
           {t("tabs.alay")}
            </p>
           </div>
           <div className="col-xl-6 col-lg-12">
              <AlaySlider/>
           </div>
        </div>
       </div>
    );
}

export default Alay;
