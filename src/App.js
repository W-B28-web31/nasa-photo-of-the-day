import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import Information from "./components/Information";


const App = _ => {

  const [apod, setApod] = useState(null)


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=hzbjykgYdMZ2MHqBc2tp19mNzF9sg5MwDbGoyo3p`)
      .then(res => {
        console.log(res)
        setApod(res.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    }, [])

  if(!apod) {
    return "Getting data ..."
  }


  return (
    <div className="App">
      <Header title={apod.title} />
      {/* props needed, title={title} */}
      <PhotoCard image={apod.hdurl} />
       {/* props needed, image={hdurl} */}
       <Information explanation={apod.explanation} />
       {/* props needed, explanation={explanation} */}
    </div>
  );
}

export default App;


