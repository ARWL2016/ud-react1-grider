import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Chart from '../components/chart'; 
import GoogleMap from '../components/googlemap'; 

class WeatherList extends Component {
    renderWeather(cityData) { 
      const {name} = cityData.city; 
      const {list} = cityData; 
      const temps = list.map(weather=> weather.main.temp); //returns a flat array for sparklines
      const pressures = list.map(weather=> weather.main.pressure); 
      const humidities = list.map(weather=> weather.main.humidity);  
      const { lon, lat } = cityData.city.coord; 

        return (
            <tr key={name}> 
              <td><GoogleMap lon={lon} lat={lat} /></td>
              <td><Chart weatherData={temps} color="orange" unit="K"/></td>
              <td><Chart weatherData={pressures} color="violet" unit="hPa"/></td>
              <td><Chart weatherData={humidities} color="purple" unit="%"/></td>
            </tr>

        );
    }

    render() {
        return (
            <table className="table table-hover"> 
                <thead> 
                    <tr> 
                        <th>City</th> 
                        <th>Temperature (K)</th> 
                        <th>Pressure (hPa)</th> 
                        <th>Humidity (%)</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    {this.props.weather.map(this.renderWeather)}

                </tbody> 

            </table>
        )
    }
}

function mapStateToProps({ weather }) { // ie Redux state.weather 
    return { weather } // assign redux state.weather to this.props.weather
}

export default connect(mapStateToProps)(WeatherList); 