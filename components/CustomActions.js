import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function CustomActions(props) {
  const { showActionSheetWithOptions } = useActionSheet();

  function onActionPress() {
    const options = [
      'Choose From Library',
      'Take Picture',
      'Send Location',
      'Cancel'
    ];

    const cancelButtonIndex = options.length - 1;
    showActionSheetWithOptions({
      options,
      cancelButtonIndex
    },
      async (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log('user wants to pick an image1');
            return;
          //        return imagePicker();
          case 1:
            console.log('user wants to take a photo');
            return;
          //        return takePhoto();
          case 2:
            console.log('user wants to get theier location');
            return;
          //        return getLocation();
          default:
            return;
        }
      }
    )
  }

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={onActionPress}
    >
      {/* Add accessibility props later ^*/}
      <View
        style={[styles.wrapper, props.wrapperStyle]}>
        <Text style={[styles.iconText, props.iconTextStyle]}>+</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
})

CustomActions.contextTypes = {
  actionSheet: PropTypes.func
}