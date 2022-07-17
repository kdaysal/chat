# Chat App!
 Chat app for mobile devices built using React Native and Expo CLI. This app will provide users with a chat interface and options to share images and their location.

## Main Objective

The objective here was to build a chat app for mobile devices using React Native, Expo CLI, Expo Go, and features from the freely available GiftedChat component. This app provides users with a chat interface and options to share images, pictures, and even their geographical location. The simplicity of a 2 page app removies complexity from navigation and allows users to focus on what matters most - chatting it up! - all while giving the intrepid developer some real-world practice in developing a native app using a completely new set of tools ;)

## Key Features

<p float="center">
  <img src="https://github.com/kdaysal/chat/blob/main/images/chat-app-1.PNG" width="300" />
  <img src="https://github.com/kdaysal/chat/blob/main/images/chat-app-2.PNG" width="300" /> 
</p>

* A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

* A page displaying the conversation, as well as an input field and submit button

* The chat provides users with two additional communication features: sending images
and location data.

* Data is able to be stored both online and offline.

## Technologies Used

* React
    * react
    * react-dom
* React Native
    * react-native-async-storage/async-storage
    * react-native-community/masked-view
    * react-native-community/netinfo
    * react-navigation/native
    * react-navigation/stack
    * react-native-gesture-handler
    * react-native-gifted-chat
    * react-native-maps
    * react-native-reanimated
    * react-native-safe-area-context
    * react-native-screens
    * react-native-web
    * react-navigation
* Expo
    * Expo Go - for simulation/runtime environment
    * Expo CLI - for development / running the server
    * expo-av
    * expo-image-picker
    * expo-location
    * expo-permissions
    * expo-status-bar
    * expo/react-native-action-sheet
* ImagePickerAPI
    * launchImageLibraryAsync - to open up the device's media library and let the user choose a file
    * launchCameraAsync - to open up the device's camera and allow the user to take a photo (in realtime)

## User Stories

* As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.

* As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

* As a user, I want to send images to my friends to show them what I’m currently doing.

* As a user, I want to share my location with my friends to show them where I am.

* As a user, I want to be able to read my messages offline so I can reread conversations at any
time.

* As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.


## Technical Requirements

* The app was written in React Native.

* The app was developed using Expo.

* The app was styled according to a screen design with specific UX constraints.

* ...more requirements to be documents as development continues...

* Chat conversations must be stored in Google Firestore Database.

* The app must authenticate users anonymously via Google Firebase authentication.

* Chat conversations must also be stored locally.

* The app must let users pick and send images from the phone’s image library.

* The app must let users take pictures with the device’s camera app, and send them.

* The app must store images in Firebase Cloud Storage.

* The app must be able to read the user’s location data.

* Location data must be sent via the chat in a map view.

* The chat interface and functionality must be created using the Gifted Chat library.

* The app’s codebase must contain comments.

## Requirements to Run/Install Locally

* npm / Node.js (or yarn)
* Emulator such as [XCODE](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/) (iOS) or [Android Studio](https://developer.android.com/studio)
* [Expo Go](https://expo.dev/client) (alternative to emulators)
* [Expo CLI](https://docs.expo.dev/get-started/installation/)

## How to Run the App

* Clone this reposity to a folder on your local machine: https://github.com/kdaysal/chat
* In your terminal, navigate to the root folder where you saved the project files
    * Install the Expo CLI - following the instructions in the documentation [here](https://docs.expo.dev/get-started/installation/)
    * Install all required dependencies by typing: `npm install` (or the equivalent yarn command)
* Download and install the "Expo Go" app (available for free on the Apple Store)
* To run the app, head back to your terminal and in the project root folder type `npm start` or `expo start` 
* Once Expo compiles the project it should display development options in a separate browser window. If this doesn't happen automatically, copy the localhost path from your CLI's output and paste into your browser's url bar to view the page.
* To view the app from a mobile device, use your device's camera (IOS) or from the Expo app itself (Android) to scan the QR Code that is displayed in your browser after Expo has compiled the project
* Note - if the default 'LAN' option is not loading your app, ensure that your device is on the same network as the machine you're running command lines from. If that still fails, try switching form LAN to 'Tunnel'
* Alternatively you can view the app using the preferred emulator of your choice - 
    * For Mac, check out [XCODE](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html)
    * For Windows / Linux, check out [Android Studio](https://developer.android.com/studio)

* Note - the devloper is kind enough to offer up his firestore database for your use in testing out this app (anonymous authentication is freely allowed) - but please try to keep the volume of cat pictures uploaded to < 1gb. Thank you!