import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import BgImage from "../assets/background-image.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      backgroundColor: this.colors.color1
    };
  }

  //When user clicks on a color from the color palette, update state of backgroundColor to the chosen color
  changeBackgroundColor = (userSelectedColor) => {
    console.log(`changeBackgroundColor is running`);
    console.log(`before state update, backgroundColor is: ${this.state.backgroundColor}`);
    this.setState({ backgroundColor: userSelectedColor });
    console.log(`now state of backgroundColor is: ${this.state.backgroundColor}`);
  }

  //Define the color palette that users can choose (per the design specs). This object will be used to update the state of backgroundColor
  colors = {
    color1: "#090C08",
    color2: "#474056",
    color3: "#8A95A5",
    color4: "#B9C6AE"
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

            { /* These are the background color options for the chat screen that the user can choose */}
            {/* With TouchableOpacit, on press down, the opacity of the wrapped view is decreased, dimming it. */}
            <View style={styles.colorPalette}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.changeBackgroundColor(this.colors.color1)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.changeBackgroundColor(this.colors.color2)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.changeBackgroundColor(this.colors.color3)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.changeBackgroundColor(this.colors.color4)}
              ></TouchableOpacity>
            </View>
            <View style={styles.chatButtonWrapper}>
              <Button
                color="#FFFFFF"
                title="Start Chatting..."
                onPress={() => this.props.navigation.navigate('Chat', {
                  name: this.state.name,
                  selectedBackgroundColor: this.state.backgroundColor
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
    height: "100%",
    width: "100%",
    fontSize: 16,
    fontWeight: "300",
    opacity: 0.5,
    color: "#757083",
    paddingLeft: 10,
  },
  chatButtonWrapper: {
    backgroundColor: "#757083",
    width: "88%",
  },
  pickColorWrapper: {
    marginRight: "auto",
    paddingLeft: 25,
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