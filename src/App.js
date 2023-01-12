import React, {Suspense} from "react";
import { useState, useEffect } from "react";
import PropagateLoader  from "react-spinners/PropagateLoader";
import Layout from "./Layout/Layout";
import './i18n'
import './style.scss'

  

function App() {
    let [loading, setLoading] = useState(false);
  useEffect(() => {
     setLoading(true)
     setTimeout(()=>{
        setLoading(false)
     }, 3000)
  }, []);
  return (
    <Suspense fallback={'Loading...'}>
     <div className="App">
        {
          loading ? <div className="spinner">
            <PropagateLoader 
          color={"#36d7b7"}
          loading={loading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"/>
          </div>:   
        <Layout/>
        }
     </div>
     </Suspense>
  );
}

export default App;
