'use strict';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import carIcon from '../images/carIcon.png';
import plateIcon from '../images/plateIcon.png';
import { BackHandler } from 'react-native';

export default class defineCar extends Component {
  constructor(props){
     super(props)
     this.state = {dropdownSelection: '-- Choose --'}
  }
  componentDidMount() {
    BackHandler.addEventListener('backPress');
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }
  render() {
    return (
      <MenuContext style={{ flex: 1, backgroundColor: '#ECECEC' }}>
          <View style={styles.content}>
            <Text style={styles.contentText}>
                SELECT YOUR CAR MAKE BELOW
            </Text>
            <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
              <View style={styles.iconWrap}>
                <Image
                  source = {plateIcon}
                  style = {styles.icon}
                  resizeMode = "contain" />
              </View>
              <MenuTrigger>
                <Text>{this.state.dropdownSelection}</Text>
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                           renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                <MenuOption value="Toyota">
                  <Text>Toyota</Text>
                </MenuOption>
                <MenuOption value="Suzuki">
                  <Text>Suzuki</Text>
                </MenuOption>
                <MenuOption value="Honda">
                  <Text>Honda</Text>
                </MenuOption>
                <MenuOption value="Diahatsu">
                  <Text>Diahatsu</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source = {carIcon}
                  style = {styles.icon}
                  resizeMode = "contain" />
              </View>
              <TextInput
                  placeholder = "Model"
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
              />
          </View>
          <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source = {plateIcon}
                  style = {styles.icon}
                  resizeMode = "contain" />
              </View>
              <TextInput
                  placeholder = "License Plate"
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
              />
          </View>
          <Container>
              <Button
                  label="Next"
                  styles={{button: styles.secondaryButton, label: styles.buttonWhiteText}}
                  onPress={() => this.handlePress()} />
          </Container>
      </MenuContext>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
      backgroundColor: '#ECECEC',
      padding: 30
  },
  iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#d73352'
  },
  icon: {
    width: 20,
    height: 20
  },
  inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      marginLeft: 50,
      marginRight: 60,
      height: 40,
      backgroundColor: "transparent"
  },
  label: {
      color: '#0d8898',
      fontSize: 20
  },
  alignRight: {
      alignSelf: 'flex-end'
  },
  textInput: {
      flex: 1,
      height: 50,
      paddingHorizontal:10,
      fontSize: 18,
      backgroundColor: '#FFF'
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
  buttonBlackText: {
      fontSize: 20,
      color: '#595856'
  },
  primaryButton: {
      backgroundColor: '#d73352'
  },
  secondaryButton: {
    marginTop: 30,
    backgroundColor: '#d73352',
    width: Dimensions.get('window').width/1.28,
    marginLeft: 40,
    marginRight: 80
  },
  content: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 10,
    paddingTop: 100,
    paddingLeft: 50,
    paddingBottom: 30,
  },
  contentText: {
    fontSize: 18,
    fontFamily: 'Bebas Neue'
  },
  dropdown: {
    width: 300,
    backgroundColor: 'white',
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200
  }
});
