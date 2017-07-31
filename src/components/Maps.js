import React, { Component } from 'react'
import MapView from 'react-native-maps';
import {
   StyleSheet,
   Dimensions
} from 'react-native'

const Maps = (props) => {
   return (
      <MapView
         style = {styles.map}
         showsUserLocation = {false}
         followUserLocation = {false}
         zoomEnabled = {true}
      />
   )
}

const styles = StyleSheet.create ({
   map: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height/1.4
   }
})

export default Maps;
