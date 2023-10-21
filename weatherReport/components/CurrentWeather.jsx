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
                        <div className="card">
                            <h2>{weather.location.name} </h2> 
                            <h2>{weather.location.region}</h2>
                        </div>
                        <div className="card">
                            <h4>Temperature {weather.current.temp_f}°F, or {weather.current.temp_c}°C</h4>
                        </div>
                        <div className="card">
                            <h3>Condition: {weather.current.condition.text} sky</h3>
                            <img
                                className="weather-icons"
                                src={weather.current.condition.icon}
                                alt={`Icon for ${weather.current.condition.text}`}
                            />
                        </div>
                    </div>
                </div>
            ) : null }
            
        </>
    );
};

export default CurrentWeather;