var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  BackHandler
} from 'react-native';
import MapView from "react-native-maps"

import { Card, Avatar, Subheader, Divider, Drawer, Toolbar, TYPO, COLOR } from 'react-native-material-design';
import Maps from '../components/Maps';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';


const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class passengerMap extends Component {
  constructor(props) {
     super(props);
     this.state = {
       latitude: 37,
       longitude: 120,
       markers: [{
         title: 'Location',
         coordinates: {
           latitude: 37,
           longitude: 120
         },
       }],
       error: null
     };
  }
  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        error => alert(JSON.stringify(error)), {
          enableHighAccuracy: true,
          timeout: 20000
        }
      );
      //this.updateCoordinates();
  }
  render() {
    return (
      <View>
      <View style = {styles.search}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data);
            console.log(details);
            this.setState({
              region: {
                latitude: parseFloat(JSON.stringify(details.geometry.location.lat)),
                longitude: parseFloat(JSON.stringify(details.geometry.location.lng)),
                latitudeDelta: 0.0491,
                longitudeDelta: 0.0375
              }
            })
            alert((JSON.stringify(details.geometry.location)));
            alert(this.state.latitude);
            this.setState({
                location: details
            });
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCNLt4zc91YiCgO7cX_WHIhNThxHFx10ZI',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            width: Dimensions.get('window').width
          }}

          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          //currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          //predefinedPlaces={[homePlace, workPlace]}
          debounce={200}/>
        </View>
        <MapView
            style = {styles.map}
            showsUserLocation = {true}
            followUserLocation = {true}
            zoomEnabled = {true}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0491,
              longitudeDelta: 0.0375,
            }} region={this.state.region}>
            {this.state.markers.map((marker) => (
              <MapView.Marker
                  key={marker.title}
                  coordinate={marker.coordinates}
                  title={marker.title}
                  description={"Location"}>
                  <MapView.Callout tooltip style={styles.customView}>
                      <View style={styles.calloutText}>
                          <Text>{marker.title}</Text>
                      </View>
                  </MapView.Callout>
              </MapView.Marker>
          ))}
       </MapView>
        <View style={styles.bottombar}/>
        <View style = {styles.scroll}>
          <Text>{this.state.latitude}</Text>
          <Button label="Next"
              styles={{button: styles.secondaryButton, label: styles.buttonWhiteText}}
              onPress={() => this.props.navigation.navigate("passengerMap")} />
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    height: 200,
    backgroundColor: '#ECECEC',
    width: Dimensions.get('window').width
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/1.5
  },
  heading: {
    color: 'black',
    fontFamily: 'Bebas Neue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 45
  },
  scroll: {
      backgroundColor: '#ECECEC',
      marginTop:30
  },
  bottombar: {
    borderColor: 'black'
  },
  secondaryButton: {
    marginTop: 30,
    backgroundColor: '#d73352',
    width: Dimensions.get('window').width/1.2,
    marginLeft: 40
  },
  buttonWhiteText: {
      fontSize: 20,
      color: '#E1D7D8'
  }
});
