import React from 'react';
import OshSlider from './oshSlider'
import './tabs.scss'

const Osh = () => {
    return (
       <div className="conatiner">
         <div className="row">
           <div className="col-xl-6 col-lg-12">
           <p>
                Osh (Kyrgyz: Ош, romanised Osh; Uzbek: O‘sh/Ўш) is the second-largest city in Kyrgyzstan, located in the Fergana Valley in the south of the country and often referred to as the "capital of the south".[4] It is the oldest city in the country (estimated to be more than 3,000 years old) and has served as the administrative center of Osh Region since 1939. The city has an ethnically mixed population of 322,164 in 2021,[3] comprising Uzbeks, Kyrgyz, Russians, Tajiks, and other smaller ethnic groups. It is about 5 km from the Uzbekistan border.
            </p>
            <p>
               Osh has an important outdoor bazaar which has been taking place on the same spot for the past 2000 years and was a major market along the Silk Road. The city's industrial base, established during the Soviet period, largely collapsed after the break-up of the Soviet Union and has recently only started to revive.

               The proximity of the Uzbekistan border, which cuts through historically linked territories and settlements, deprives Osh of much of its former hinterland and presents a serious obstacle to trade and economic development. Daily flights from Osh Airport link Osh—and hence the southern part of Kyrgyzstan—to Bishkek and some international destinations, mainly in Russia. Osh has two railway stations and a railway connection to Andijan in neighbouring Uzbekistan, but no passenger traffic and only sporadic freight traffic. Most transport is by road.
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
