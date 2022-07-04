import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// The application’s main Chat component that renders the chat UI
export default class Chat extends React.Component {
  render() {
    //Extract the user's name from the Start page
    let name = this.props.route.params.name;

    //Set backgroundColor on Chat page to what the user selected on the Start page
    const selectedBackgroundColor = this.props.route.params.selectedBackgroundColor;

    //Sets the page title to the user's name
    this.props.navigation.setOptions({ title: name });

    return (
      <View style={styles.chatView} backgroundColor={selectedBackgroundColor}>
        <Text>Hi {name}, let's chat!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chatView: {
    //backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})