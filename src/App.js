import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import Information from "./components/Information";


function App() {

  const {nasa, setNasa } = useState({})

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=hzbjykgYdMZ2MHqBc2tp19mNzF9sg5MwDbGoyo3p`)
      .then(res => {
        setNasa(res.data)
        console.log(nasa)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    }, [])

  return (
    <div className="App">
      <Header title={nasa} />
      {/* props needed, title={title} */}
      <PhotoCard image={nasa}/>
       {/* props needed, image={hdurl} */}
       <Information explanation={nasa}/>
       {/* props needed, explanation={explanation} */}
    </div>
  );
}

export default App;


// key hzbjykgYdMZ2MHqBc2tp19mNzF9sg5MwDbGoyo3p
