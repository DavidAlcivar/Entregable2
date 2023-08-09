
import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import axios from 'axios'


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const success = (pos) => { 
    const lat = pos.coords.latitude
    const long = pos.coords.longitude 

    const API_KEY = "ecfb8655afae727e8eae89e80eb670f4"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    
    axios.get(url)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  
  }

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  return (
    <main className='Text'>
      
        <Weather weatherInfo={weatherInfo}/>      
    
    </main>
  );
}

export default App
