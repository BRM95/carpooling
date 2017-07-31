import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import personIcon from '../images/personIcon.png';
import passwordIcon from '../images/passwordIcon.png';
//import router from '../../Router';
import { BackHandler } from 'react-native';

export default class Register extends Component {
  static navigationOptions = {
   title: 'Register',
   headerTitleStyle: {
      color: '#fefefe',
      fontFamily: 'MuseoSansRounded-300',
      fontWeight: '300',
      textAlign: 'center',
      alignSelf: 'center',
      marginRight: 56
   },
   headerStyle: {
      backgroundColor: '#379FC5',
      elevation: 0
   },
   headerTintColor: '#fefefe'
  }
  componentDidMount() {
    BackHandler.addEventListener('backPress');
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  handlePress = () => {
      //alert(this.state.password);
      if(this.validateEmail(this.state.email) && this.state.password){
        const data = {
         email: this.state.email,
         password: this.state.password,
        }
        const json = JSON.stringify(data);
        fetch('http://192.168.122.1:3000/register.json', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          })
        }).then(function(response){
              //alert(JSON.stringify(response.json()))
           }).then(() => {
              //alert('Success! You may now log in.');
              this.props.navigation.navigate("defineCar");//Navigate to address screen
           }).catch((error) => {
             alert(error);
           }).done()
      }else{
        alert("Please enter the details correctly and try again");
      }
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
      <View style={{marginTop: 150}}/>
      <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source = {personIcon}
              style = {styles.icon}
              resizeMode = "contain" />
          </View>
          <TextInput
              placeholder = "Email"
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({email:text})}
          />
      </View>
      <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source = {passwordIcon}
              style = {styles.icon}
              resizeMode = "contain" />
          </View>
          <TextInput
              secureTextEntry={true}
              placeholder = "Password"
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({password:text})}
          />
      </View>
      <Container>
          <Button
              label="Next"
              styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
              onPress={() => this.handlePress()} />
      </Container>
      </ScrollView>
    );
  }

  press(){

  }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#ECECEC',
        padding: 30
    },
    alignRight: {
        alignSelf: 'flex-end'
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
        height: 40,
        backgroundColor: "transparent"
    },
    textInput: {
        flex: 1,
        height: 50,
        paddingHorizontal:10,
        fontSize: 18,
        backgroundColor: '#FFF'
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
        backgroundColor: '#3B5699'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    inline: {
        flexDirection: 'row'
    },
    footer: {
       marginTop: 30
    }
});
