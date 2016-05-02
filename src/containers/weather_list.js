import React,{Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import Googlemap from '../components/google_map'

class WeatherList extends Component{
    renderWeatherList(cityData){
        const name = cityData.city.name
        const temps = cityData.list.map( weather => weather.main.temp )
        const pressures = cityData.list.map( weather => weather.main.pressure )
        const humidities = cityData.list.map( weather => weather.main.humidity )
        const {lon,lat} = cityData.city.coord

        return (
            <tr key={name}>
                <td><Googlemap lat={lat} lon={lon}/></td>
                <td>
                    <Chart color="orange" data={temps} units=" ℃"/>
                </td>
                <td>
                    <Chart color="blue" data={pressures} units=" hPa"/>
                </td>
                <td>
                    <Chart color="black" data={humidities} units="%"/>
                </td>
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