import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;




const DetailView = () => {

    const [list, setList] = useState(null)
    useEffect(() => {
      const fetchCurrentData = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=95616&days=7`);
        const data = await response.json();
        setList(data);
        console.log("forcast: ");
        // console.log(data.forecast.forecastday[0].date);
      };
      fetchCurrentData().catch(console.error);
    }, []);
    
    const params = useParams();
    

    return (
        <>
            <h1>DetailView</h1>
            {list &&
            list.forecast.forecastday.map((day) => {
            if (day.date === params.list) {
                return (
                <>
                    <h2>{day.date}</h2>
                    <h3>High: {day.day.maxtemp_f}°F</h3>
                    <h3>Low: {day.day.mintemp_f}°F</h3>
                    <h3>Condition: {day.day.condition.text}</h3>
                    <img
                    className="weather-icons"
                    src={day.day.condition.icon}
                    alt={`Icon for ${day.day.condition.text}`}
                    />
                </>
                );
            } else {
                return null;
            }
            })}
        </>
    );
};

export default DetailView;