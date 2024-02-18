import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from 'axios'
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App(){

  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=18f6be2527294db294a85729241702&q=${location}&aqi=no`)
      .then(response =>{  
        
        setWeatherData(response.data)
        // console.log(response.data)
      })
      .catch(error => 
        console.error("error in fetching the data"+ error)
      )
  },[location])

  useEffect(()=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=18f6be2527294db294a85729241702&q=${location}&days=1&aqi=yes&alerts=yes`)
      .then(response => {
        setForecastData(response.data)
        console.log(response)
      })
  },[location])

  return <div>
    <Navbar setLocation = {setLocation} location={location}/>
    {weatherData && <CurrentWeather weatherData={weatherData}/>}
    {forecastData && <Forecast forecastData = {forecastData}/>}
  </div>
}

export default App;