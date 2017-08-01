import React, {
   Component,
 } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PropTypes,
  Image
} from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, Avatar, Subheader, Divider, Drawer, Toolbar, TYPO, COLOR } from 'react-native-material-design';

import Select from './src/pages/Select';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import passengerMap from './src/pages/passengerMap';

import stackNav from './src/navigation/stackNav';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const CustomDrawerContentComponent = (props) => (
  <Drawer theme='light'>
      <Drawer.Header image={<Image source={require('./src/images/backgroundImage.jpg')} />}>
          <View style={styles.header}>
              <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
              <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>State Bank Carpooling</Text>
          </View>
      </Drawer.Header>
      <Drawer.Section
          items={[{
              icon: 'home',
              value: 'Welcome',
              onPress: () => this.changeScene('welcome'),
              onLongPress: () => this.changeScene('welcome')
          }]}
      />
      <Drawer.Section
          title="Components"
          items={[{
              icon: 'face',
              value: 'Avatars',
              label: '12',
              onPress: () => this.changeScene('avatars'),
              onLongPress: () => this.changeScene('avatars')
          }, {
              icon: 'label',
              value: 'Buttons',
              label: '8',
              onPress: () => this.changeScene('buttons'),
              onLongPress: () => this.changeScene('buttons')
          }, {
              icon: 'check-box',
              value: 'Checkboxes',
              label: '10',
              onPress: () => this.changeScene('checkboxes'),
              onLongPress: () => this.changeScene('checkboxes')
          }, {
              icon: 'label',
              value: 'Dividers',
              label: '10',
              onPress: () => this.changeScene('dividers'),
              onLongPress: () => this.changeScene('dividers')
          }, {
              icon: 'label',
              value: 'Icon Toggles',
              label: 'NEW',
              onPress: () => this.changeScene('icon-toggles'),
              onLongPress: () => this.changeScene('icon-toggles')
          }, {
              icon: 'radio-button-checked',
              value: 'Radio Buttons',
              label: '8',
              onPress: () => this.changeScene('radio-buttons'),
              onLongPress: () => this.changeScene('radio-buttons')
          },
          {
              icon: 'label',
              value: 'Subheaders',
              label: '4',
              onPress: () => this.changeScene('subheaders'),
              onLongPress: () => this.changeScene('subheaders')
          }]}
      />
      <Divider style={{ marginTop: 8 }} />
      <Drawer.Section
          title="Config"
          items={[{
              icon: 'invert-colors',
              value: 'Change Theme',
              label: '24',
              onPress: () => this.changeScene('themes'),
              onLongPress: () => this.changeScene('themes')
          }]}
      />
  <DrawerItems {...props} />
  </Drawer>
);


const Carpooling = DrawerNavigator({
  DrawerItem1: {
        screen: stackNav,
        navigationOptions: {
            drawer: {
                label: 'Drawer 1',
                icon: ({ tintColor }) => <Icon name="rocket" size={24} />
            },
        },
    },
},
{
  contentComponent: CustomDrawerContentComponent,
  drawerPosition: 'left'
});

const styles = StyleSheet.create({
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
});


AppRegistry.registerComponent('Carpooling', () => Carpooling);
