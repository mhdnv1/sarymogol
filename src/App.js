import React from "react";
import { useState, useEffect } from "react";
import PropagateLoader  from "react-spinners/PropagateLoader";
import Layout from "./Layout/Layout";
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
     <div className="App">
        {
          loading ? <div className="spinner">
            <PropagateLoader 
          color={"#36d7b7"}
          loading={loading}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
          </div>:   
        <Layout/>
        }
     </div>
  );
}

export default App;
