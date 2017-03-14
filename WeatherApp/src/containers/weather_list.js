import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const {name} = cityData.city; 
        const temps = cityData.list.map(weather=> weather.main.temp); //returns a flat array for sparklines  
        
        return (
            <tr key={name}> 
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>


            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover"> 
                <thead> 
                    <tr> 
                        <th>City</th> 
                        <th>Temperature</th> 
                        <th>Pressure</th> 
                        <th>Humidity</th> 
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