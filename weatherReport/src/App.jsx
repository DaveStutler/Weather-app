import { useState, useEffect } from 'react'
import './App.css'
import CurrentWeather from "../components/CurrentWeather.jsx";
import ForecastWeather from "../components/ForecastWeather.jsx";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null)
  useEffect(() => {
    const fetchCurrentData = async () => {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=95616&days=7`);
      const data = await response.json();
      setList(data);
      console.log("forcast: ");
      console.log(data);
    };
    fetchCurrentData().catch(console.error);
  }, []);


  return (
    <>
      <div className="whole-page">
        <h1>Weather Dude🌦️</h1>
        <CurrentWeather />
        <ForecastWeather list={list} />
        
      </div>
    </>
  )
}

export default App
