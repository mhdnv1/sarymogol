import React, {Suspense} from "react";
import { useState, useEffect, useContext } from "react";
import PropagateLoader  from "react-spinners/PropagateLoader";
import Layout from "./Layout/Layout";
import './i18n'
import './style.scss'
import axios from 'axios';


  
export const SliderContext = React.createContext({
  slider: [],
  setSlider: () => {},
  dataReadySlider: false,
  setDataReadySlider: ()=>{}
});

export const AreasContext = React.createContext({
  areas: [],
  setAreas: () => {},
  dataReadyAreas: false,
  setDataReadyAreas: ()=>{}
});


function App() {

  const [slider, setSlider] = useState([]);
  const [dataReadySlider, setDataReadySlider] = useState(false);
  const sliderValue = {slider, setSlider, dataReadySlider, setDataReadySlider}


  const [areas, setAreas] = useState([]);
  const [dataReadyAreas, setDataReadyAreas] = useState(false);
  const areasValue = {areas, setAreas, dataReadyAreas, setDataReadyAreas}


  // const areasContextLocal = useContext(AreasContext)
  // const sliderContextLocal = useContext(sliderContext)

    let [loading, setLoading] = useState(false);

    

    const getApiAreas = () => {
          axios.get('https://sarymogol.com/api/areas')
              .then(({ data }) => 
              {
                setDataReadyAreas(true)
                setAreas(data)
              })
      }
      const getApiSlider = () => {
          axios.get('https://sarymogol.com/api/mainimg')
            .then(({ data }) => {
              setDataReadySlider(true)
              setSlider(data)
            })
        }


  useEffect(() => {
    setLoading(true)
      if(window.location.pathname==''||window.location.pathname=='/'){
        if(!dataReadyAreas)
          getApiAreas()
        if(!dataReadySlider)
          getApiSlider()
      }
      setTimeout(()=>{
        setLoading(false)
     }, 10000)
  }, []);

  return (
    <Suspense fallback={'Loading...'}>
      
      <SliderContext.Provider value={sliderValue}>
        <AreasContext.Provider value={areasValue}>
      
          <div className="App">
              {
                // !dataReadySlider && !dataReadyAreas
                loading
                 ? <div className="spinner">
                  <PropagateLoader 
                color={"#36d7b7"}
                loading={true}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"/>
                </div>:   
              <Layout/>
              }
          </div>          
          </AreasContext.Provider>
     </SliderContext.Provider>
     </Suspense>
  );
}

export default App;
