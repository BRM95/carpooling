import React, { Component } from 'react';
import MapView from "react-native-maps"
import { Card, Avatar, Subheader, Divider, Drawer, Toolbar, TYPO, COLOR } from 'react-native-material-design';


import {
 StyleSheet,
 Text,
 View,
 TextInput,
 ScrollView,
 Dimensions,
 Image,
 IntentAndroid
} from 'react-native';

import Maps from '../components/Maps';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';


export default class passengerMap extends Component {
  static navigationOptions = {
   title: 'MAP',
   headerTitleStyle: {
      color: '#fefefe',
      fontFamily: 'Bebas Neue',
      fontWeight: 'bold',
      fontSize: 24,
   },
   headerStyle: {
      backgroundColor: '#379FC5',
      elevation: 0,
      marginleft: 30
   },
   headerTintColor: '#fefefe'
  }
  constructor() {
     super();
  }
  render() {
     return (
       <View>
          <View style={styles.map}>
            <Maps/>
          </View>
          <View style={styles.bottombar}/>
          <View style = {styles.scroll}>
          <Button label="Next"
              styles={{button: styles.secondaryButton, label: styles.buttonWhiteText}}
              onPress={() => this.props.navigation.navigate("passengerMap")} />
          </View>
       </View>
     );
  }
}
const styles = StyleSheet.create({
  map: {
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
      marginTop:30,
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
