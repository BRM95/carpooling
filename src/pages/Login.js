import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Background from '../components/Background';
import personIcon from '../images/personIcon.png';
import passwordIcon from '../images/passwordIcon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from '../pages/Register';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
    render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.scroll}>
            <Container>
                <Button
                    label="Forgot Login/Pass"
                    styles={{button: styles.alignRight, label: styles.label}}
                    onPress={this.press.bind(this)} />
            </Container>
            <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image
                    source = {personIcon}
                    style = {styles.icon}
                    resizeMode = "contain" />
                </View>
                <TextInput
                    placeholder = "Username"
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
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
                    underlineColorAndroid="transparent"                />
            </View>
            <Container>
                <Button
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press.bind(this)} />
            </Container>
            <View style={styles.footer}>
                <Container>
                  <Text style = {styles.alert}>
                    Not a user yet? Sign up below!
                  </Text>
                </Container>
                <Container>
                    <Button
                        label="Sign Up"
                        styles={{button: styles.secondaryButton, label: styles.buttonWhiteText}}
                        onPress ={() => this.props.navigation.navigate("Registeration")}  />
                </Container>
                <Container>
                    <Button
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}}
                        onPress={this.press.bind(this)} />
                </Container>
            </View>
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
        backgroundColor: '#3B5699'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    footer: {
       marginTop: 30
    }
});
