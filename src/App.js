import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  var date=new Date().toLocaleDateString()
  const [place, setPlace] = useState("Ambikapur")
  const [city, setCity] = useState(null)
 
    useEffect(() => {
      var getData=async ()=>{
        var response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=c734617deab0f8f3c82dabf3426de1fa`)
        var result=await response.json();
        console.log(result);
        if (result.cod<400) {
          setCity(result)
        } else {
          setCity(null)
        } 
      }
      getData();
    }, [place])


  return (
    <>
      <div className="container">
        <div className="input-field">
          <input type="text" placeholder="Enter Location" value={place} onChange={(e)=>setPlace(e.target.value)} />
        </div>
        {
          city?<><div className="main-content">
        <h3>Date : {date}</h3>
        <h1>{place}</h1>
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="" />
          <h1>{city.weather[0].description}</h1>
          <h3>Humadity : {city.main.humidity} </h3><h3> Temparatur : {city.main.temp}<sup>o</sup>C </h3>
          <h5>Max Temp :{city.main.temp_max} <sup>o</sup>C | Min temp :{city.main.temp_min} <sup>o</sup>C </h5>
        </div></>: <h1>Sorry City Not FOund</h1>
        }
        
      </div>
    </>
  );
}

export default App;
