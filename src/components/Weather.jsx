import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import SearchIcon from '../assets/search.svg'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import humidityIcon from '../assets/humidity.png'
import windIcon from '../assets/wind.png'

const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);
    const allIcons = {
        "01d": clearIcon,
        "02d": clearIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
       

    }
    const search = async(city)=>{
        if(city === ""){
            alert("Please enter a city name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const res = await fetch(url);
            const data = await res.json();

            
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clearIcon;
            setWeatherData({
                humidity:data.main.humidity,
                wind:data.wind.speed,
                temp: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error fetching weather data:", error);
        }
    }
    useEffect(()=>{
        search("Thailand");
    },[])
  return (
    <div className='weather'>
        <div className="search">
            <input ref={inputRef} type="text" placeholder='Search...'  
             onKeyDown={(e) => {
                if (e.key === "Enter") {
                    search(inputRef.current.value);
                }
            }} />
            <img src={SearchIcon} alt="" onClick={()=>search(inputRef.current.value)}  />
        </div>
        {weatherData?<>
            <img src={weatherData.icon}  alt="" className='weather-icon' />
        <p className='temperature'>{weatherData.temp}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidityIcon} alt=""/>
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={windIcon} alt="" />
                <div>
                    <p>{weatherData.wind} km/h</p>
                    <span>Wind Speed</span> 
                </div>
            </div>
        </div>
        </>:<></>}
        
    </div>
  )
}

export default Weather