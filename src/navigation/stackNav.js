import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";

import Select from '../pages/Select';
import Login from '../pages/Login';
import Register from '../pages/Register';
import passengerMap from '../pages/passengerMap';
import defineCar from '../pages/defineCar';

const stackNav = StackNavigator({
    Main: {
      screen: Login,
      navigationOptions:({navigation}) => ({
          title: 'LOGIN',
          headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#d73352' },
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Bebas Neue',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginRight: 56
          },
          headerTintColor: '#ECECEC'
      })
    },
    passengerMap: {
      screen: passengerMap,
      navigationOptions:({navigation}) => ({
          title: 'ADDRESS',
          headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#d73352' },
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Bebas Neue',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginRight: 56
          },
          headerTintColor: '#ECECEC'
      })
    },
    defineCar: {
      screen: defineCar,
      navigationOptions:({navigation}) => ({
          title: 'SPECIFY THE DETAILS OF YOUR VEHICLE',
          headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#d73352' },
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Bebas Neue',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginRight: 20
          },
          headerTintColor: '#ECECEC'
      })
    },
    Registeration: {
      screen: Register,
      navigationOptions:({navigation}) => ({
          title: 'REGISTERATION',
          headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#d73352' },
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Bebas Neue',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginRight: 56
          },
          headerTintColor: '#ECECEC'
      })
    },
    Select: {
        screen: Select,
        navigationOptions:({navigation}) => ({
            title: 'OPTIONS',
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#d73352' },
            headerTitleStyle: {
              color: 'white',
              fontFamily: 'Bebas Neue',
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              marginRight: 56
            },
            headerTintColor: '#ECECEC'
        })
    },
});

export default stackNav;
