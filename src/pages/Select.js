import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  resizeMode,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import Background from '../components/Background';
//import router from '../Router';

let width = Dimensions.get('window').width
export default class Select extends Component {


  render() {
    return (
      <View style={styles.main}>
        <View style={styles.scroll}>
          <Container>
              <Text style={styles.textStyle}>Choose an Option Below</Text>
              <Button
                  label="Driver"
                  styles={{button: styles.circularButton, label: styles.buttonWhiteText}}
                  onPress={() => this.handlePress()}>
              </Button>
              <Button
                  label="Passenger"
                  styles={{button: styles.circularButton, label: styles.buttonWhiteText}}
                  onPress={() => this.handlePress()} />
          </Container>
        </View>
      </View>
    );
  }

  press(){

  }
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: 'black',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1
    },
    backgroundImage: {
        flex: 1,
        top: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        left: 0,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    textStyle: {
      color: '#FFF',
      fontFamily: 'MuseoSansRounded-300',
      fontWeight: '700',
      fontSize:   30,
      textAlign: 'center',
      alignSelf: 'center'
    },
    circularButton: {
      flexDirection: 'row',
      marginTop: 50,
      width: 150,
      borderWidth: 2,
      borderColor:'white',
      marginLeft: Dimensions.get('window').width/4,
      height: 150,
      borderRadius: 100
    },
    scroll: {
        flex:1,
        padding: 30
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
      height: 80,
      fontSize: 30,
      backgroundColor: '#FFF',
      borderRadius: 10
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    alert: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    footer: {
       marginTop: 30
    }
});
