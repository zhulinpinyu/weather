import React,{Component} from 'react'
import {connect} from 'react-redux'

class WeatherList extends Component{
    renderWeatherList(cityData){
        const name = cityData.city.name
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)