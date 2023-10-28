import { useState, useEffect } from 'react'
import './App.css'
import CurrentWeather from "../components/CurrentWeather.jsx";
import ForecastWeather from "../components/ForecastWeather.jsx";
import LocationWeather from "../components/LocationWeather.jsx";
import { Link, Outlet } from "react-router-dom";


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
        <div className='left-side'>
          <LocationWeather />
        </div>
        <div className='right-side'>
          <CurrentWeather />
          <ForecastWeather list={list} />
        </div>
      </div>
    </>
  )
}

export default App
