import React from 'react';
import Icon from '../Icon/index'
import './WeatherCard.css'
import { API_KEY, getDateFromDT } from '../utils';

export default class WeatherCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { weather: {} };
    }

    async componentDidMount() {
        const json = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Kharkiv&units=metric&cnt=7&appid=${API_KEY}`);
        const data = await json.json();

        this.setState({ weather: data });
    }

    render() {
        
        const { weather } = this.state;
        
        if (!weather.list) {
            return <div>Loading...</div>;
        }
        console.log(weather)
        const weatherToday = weather.list[0];

        return (
            <>
                <div className="text-content">
                    <div className="date">{getDateFromDT(weatherToday.dt, 'MMMM D dddd')}</div>
                    <div className="city">{weather.city.name}</div>
                </div>

                <div className="temp-content">
                    <div className="temp">{Math.round(weatherToday.temp.day)}°</div>
                    <Icon size="large" weatherType={weatherToday.weather[0].main.toLowerCase()} />
                </div>

                <div className="weather-week">
                    {weather.list.map((day, index) => 
                        <div key={index} className="day">
                            <div>{getDateFromDT(weather.list[index].dt, 'ddd')}</div>
                            <Icon size="small" key={index} weatherType={weather.list[index].weather[0].main.toLowerCase()} />
                            <div>{Math.floor(weather.list[index].temp.day)}°</div>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
