import React,{Component} from 'react'
import {connect} from 'react-redux'

class WeatherList extends Component{
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
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)