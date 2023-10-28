import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CurrentWeather = () => {
    const [weather, setWeather] = useState(null);
    useEffect(() => 
    {
        const getWeather = async () => 
        {
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=95616`);
            const json = await response.json();
            setWeather(json);
            console.log("current: ");
            console.log(json);
        };
        getWeather().catch(console.error);
    }, []);


    return (
        <>
            {weather ? 
            (
                <div className="weather-heading">
                    <div className="weather-card">
                        <div className="card" id="current-location">
                            <h2>{weather.location.name} </h2> 
                        </div>
                        <div className="card" id="current-temp">
                            <h1> {weather.current.temp_f}</h1>
                        </div>
                        <h3>{weather.current.condition.text}</h3>
                    </div>
                </div>
            ) : null }
            
        </>
    );
};

export default CurrentWeather;