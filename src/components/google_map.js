import React,{Component} from 'react'
import {GoogleMapLoader,GoogleMap} from 'react-google-maps'

export default class Googlemap extends Component {
    render(){
        return (
            <GoogleMapLoader
                containerElement={
                    <div style={{height: "100%"}}/>
                }
                googleMapElement={
                    <GoogleMap
                        defaultZoom={10}
                        defaultCenter={{lat: this.props.lat ,lng: this.props.lon}}
                    >
                    </GoogleMap>
                }
            >

            </GoogleMapLoader>
        )
    }
}