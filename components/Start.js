import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

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
            <View style={styles.nameBox}>
              <TextInput
                style={styles.inputText}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder='Enter your name ...'
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.pickColorWrapper}>
              <Text style={styles.pickColor}>
                Choose Background Color!
              </Text>
            </View>
            <View style={styles.colorPalette}>
              <TouchableOpacity
                style={styles.color1}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color2}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color3}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color4}
              ></TouchableOpacity>
            </View>
            <View style={styles.chatButtonWrapper}>
              <Button
                color="#FFFFFF"
                title="Start Chatting..."
                onPress={() => this.props.navigation.navigate('Chat', {
                  name: this.state.name
                }
                )}
              />
            </View>
          </View>
        </ImageBackground>
      </View> //end styles.container
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
    height: "44%",
    alignItems: "center",
  },
  titleText: {
    fontSize: 45,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  boxWrapper: {
    alignItems: "center",
    width: "88%",
    height: "44%",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  nameBox: {
    width: "88%",
    height: 70,
    borderWidth: 3,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 16,
    fontWeight: "300",
    opacity: 0.5,
    color: "#757083"
  },
  chatButtonWrapper: {
    backgroundColor: "#757083",
    width: "88%",
    // height: 70,
    // borderRadius: 8,
    // backgroundColor: "#1D6085",
    // alignItems: "center",
    // justifyContent: "center",
  },
  pickColorWrapper: {
    marginRight: "auto",
    paddingLeft: 25,
    //width: "88%",
  },
  pickColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
  },
  colorPalette: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  color1: {
    backgroundColor: "#090C08",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  color2: {
    backgroundColor: "#474056",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  color3: {
    backgroundColor: "#8A95A5",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  color4: {
    backgroundColor: "B9C6AE",
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: "gray",
    borderWidth: 1
  },
});