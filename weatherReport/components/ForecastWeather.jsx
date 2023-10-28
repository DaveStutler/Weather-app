import React from "react";
import { Link } from "react-router-dom";

const ForecastWeather = ({list}) => {
    
    return (
        <div className='weather-forcast'>
          <h4>7 Day Forecast</h4>
          <div className="weather-container">
            <Link 
            to={`/day/${list ? list.forecast.forecastday[0].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[0].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[0].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[0].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[0].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[0].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[0].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[1].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[1].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[1].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[1].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[1].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[1].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[1].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[2].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[2].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[2].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[2].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[2].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[2].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[2].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[3].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[3].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[3].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[3].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[3].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[3].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[3].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[4].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[4].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[4].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[4].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[4].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[4].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[4].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[5].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[5].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[5].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[5].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[5].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[5].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[5].day.condition.text : null}`}
                  />
              </div>
            </Link>
            <Link 
            to={`/day/${list ? list.forecast.forecastday[6].date : null}`}
            >
              <div className='day'>
                <div className="day-info">
                    <h2>{list ? list.forecast.forecastday[6].date : null}</h2>
                    <h3>High: {list ? list.forecast.forecastday[6].day.maxtemp_f : null}°F</h3>
                    <h3>Low: {list ? list.forecast.forecastday[6].day.mintemp_f : null}°F</h3>
                    <h3>Condition: {list ? list.forecast.forecastday[6].day.condition.text : null}</h3>
                </div>
                <img
                  className="weather-icons"
                  src={list ? list.forecast.forecastday[6].day.condition.icon : null}
                  alt={`Icon for ${list ? list.forecast.forecastday[6].day.condition.text : null}`}
                  />
              </div>
            </Link>
          </div>
        </div>
    );
};

export default ForecastWeather;