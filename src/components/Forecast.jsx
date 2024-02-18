function Forecast({forecastData}){
    return <div>
        <div className="flex justify-center items-center">
            <p>Forecast detail</p>
            {forecastData.forecastday && (
          <p>Date : {forecastData.forecastday.date_epoch}</p>
        )}
        </div>
    </div>
}

export default Forecast