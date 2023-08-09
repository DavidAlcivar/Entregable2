import { useState } from "react";

const Weather = ({weatherInfo}) => {
    const [isCelsius, setIsCelsius] = useState(true)
   

    const kelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFahrenheit = (tempKelvin) => {
        return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
    }

    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }                         


    const result = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)

  return (
    <section className="container">
        <h2>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

        <section className="content">


            <section className="content1">
                <h4 className="weatherInfo">{weatherInfo?.weather[0].description}</h4>
                <div className="compones"> <span className="grade">{result}°{isCelsius ? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div></div>
               
            </section>

            <section className="content2">
                <article className="wind">
                    <div className="image1">
                        <img src={"/Images/wind.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.wind.speed}m/s</span>
                </article>
                <article className="humi">
                    <div className="image2">
                        <img src={"/Images/humidity.png"}alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity}%</span>
                </article>
                <article className="press"> 
                    <div className="image3">
                        <img src={"/Images/Press.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure}hPa</span>
                </article>
            </section>
   
        </section>
        <button onClick= {handleChangeTemp}className="button">Change to F°</button>
    </section>
  )
}
export default Weather