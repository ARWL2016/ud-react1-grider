import React, { Component } from 'react'; 

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, { // ie render into div below
      zoom: 12, 
      center: {
        lat: this.props.lat, 
        lng: this.props.lon // weathermap uses lon, google uses lng
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap; 