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
          <Text style={styles.titleText}>~Chat it Up!~</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder='Enter your name ...'
          />
          <Button
            style={styles.chatButton}
            title="Go to Chat"
            onPress={() => this.props.navigation.navigate('Chat', {
              name: this.state.name
            }
            )}
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  titleText: {
    fontSize: 70,
    color: "white",
    height: "70%",
    textAlign: "center",
  },
  inputText: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#000000c0",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 15,
  },

  chatButton: {
    marginLeft: "20%",
    marginRight: "20%",
  }
});