import React, { Component } from 'react';

class GoogleMap extends Component {
  // embedding a google map inside the document
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    // use this.refs.map to call upon this html element
    return <div ref="map" />;
  }
}

export default GoogleMap;

// below is another option if you use react-google-maps

// return (
//   <GoogleMapLoader
//     containerElement={ <div style={{hieght='100%'}}/> }
//     googleMapElement={
//       <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
//   }
// );
