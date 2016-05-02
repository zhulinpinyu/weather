import _ from 'lodash'
import React, {Component} from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export default class Chart extends Component{
    
    average(){
        return _.round(_.sum(this.props.data)/this.props.data.length)
    }

    render(){
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>{this.average()}{this.props.units}</div>
            </div>
        )
    }
}