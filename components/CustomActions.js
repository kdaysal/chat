import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import firebase from 'firebase';
import firestore from 'firebase';

//import permissions, image selector, and location features (gps)
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

//need this in order to build the ActionSheet
import { connectActionSheet } from "@expo/react-native-action-sheet";

// create a CustomAction component to show an ActionSheet with Options
class CustomAction extends React.Component {
  state = {
    image: null,
    location: null,
  };

  //TBD
  imagePicker = () => {
    console.log(`imagePicker running`)
  };

  //TBD
  takePhoto = () => {
    console.log(`takePhoto running`)
  };

  //TBD
  getLocation = () => {
    console.log(`getLocation running`)
  };

  // Create 4 options for the user to choose via showActionSheetWithOptions()
  onActionPress = () => {
    const options = [
      "Choose Image From Library",
      "Take Picture",
      "Send Location",
      "Cancel",
    ];
    const cancelButtonIndex = options.length - 1;
    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log(`user wants to select an image`)
            return this.imagePicker();
            return;
          case 1:
            console.log(`user wants to take a photo`)
            //  return this.takePhoto();
            return;
          case 2:
            console.log(`user wants to share location`)
            return;
          // return this.getLocation();

          default:
            console.log(`user wants to cancel!`);
        }
      }
    );
  };

  render() {
    return (
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="More options"
        accessibilityHint="Here you can choose to send an image or your location."
        style={styles.container}
        onPress={this.onActionPress}
      >
        <View style={[styles.wrapper, this.props.wrapperStyle]}>
          <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: "#b2b2b2",
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center",
  },
});

CustomAction.contextTypes = {
  actionSheet: PropTypes.func,
};

const CustomActions = connectActionSheet(CustomAction);
export default CustomActions;