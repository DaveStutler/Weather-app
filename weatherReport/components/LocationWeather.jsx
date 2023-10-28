import React from "react";
import { Link } from "react-router-dom";

/**
 * 
 * @returns search bar
 */

const LocationWeather = () => {
    
    // return search bar
    return (
        <>
            <Link to="/">
            <h1>Weather</h1>
            </Link>
            <input
            type="text"
            placeholder="Search..."
            />
        </>
    );
};

export default LocationWeather;