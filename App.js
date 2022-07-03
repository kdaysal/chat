import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView
}
  from 'react-native';

// import the screens from ./components folder
import Chat from './components/Chat';
import Start from './components/Start';

// import react native gesture handler
import 'react-native-gesture-handler';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create the navigator. This method returns an object containing two components, Navigator and Screen
const Stack = createStackNavigator();

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ""
  //   };
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }//end render
} //end class App

{/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/}
