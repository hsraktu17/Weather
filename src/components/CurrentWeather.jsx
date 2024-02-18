import '../App.css'

function CurrentWeather({ weatherData }) {



    return (
      <div className='current-weather'>
        <h2>Weather Detail</h2>
        <p>Country : {weatherData.location.country}</p>
        <p>City : {weatherData.location.name}</p>
        <p>Temperature : {weatherData.current.temp_c}°C</p>
        <p>Condition : {weatherData.current.condition.text}</p>
        <p>Wind : {weatherData.current.wind_kph} Kph</p>
      </div>
    );
  }
  
  export default CurrentWeather;