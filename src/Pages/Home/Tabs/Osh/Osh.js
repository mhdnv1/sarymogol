import React from 'react';
import OshSlider from './oshSlider'
import '../tabs.scss'
import {useTranslation} from "react-i18next";

const Osh = () => {
   const {t} = useTranslation();
    return (
       <div className="conatiner">
         <div className="row">
           <div className="col-xl-6 col-lg-12">
           <p>
           {t("tabs.osh")}
            </p>
           </div>
           <div className="col-xl-6 col-lg-12">
              <OshSlider/>
           </div>
        </div>
       </div>
    );
}

export default Osh;
