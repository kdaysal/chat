import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

import BgImage from "../assets/background-image.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>~Chat it Up!~</Text>
          </View>
          <View style={styles.boxWrapper}>
            <TextInput
              style={styles.inputText}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder='Enter your name ...'
              placeholderTextColor="azure"
            />
            <Button
              style={styles.chatButton}
              title="Go to Chat"
              onPress={() => this.props.navigation.navigate('Chat', {
                name: this.state.name
              }
              )}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  titleWrapper: {
    width: "88%",
    height: "45%",
    alignItems: "center",
  },
  titleText: {
    fontSize: 50,
    color: "white",
  },
  boxWrapper: {
    alignItems: "center",
    width: "88%",
    height: "44%",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  inputText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#000000c0",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "yellow",
    padding: 2
  },

  chatButton: {
    marginLeft: "20%",
    marginRight: "20%",
  }
});