# Chat App!
 Chat app for mobile devices built using React Native and Expo CLI. This app will provide users with a chat interface and options to share images and their location.

## Main Objective

The objective here was to build a chat app for mobile devices using React Native, Expo CLI, Expo Go, and features from the freely available GiftedChat component. This app provides users with a chat interface and options to share images, pictures, and even their geographical location. The simplicity of a 2 page app removies complexity from navigation and allows users to focus on what matters most - chatting it up! - all while giving the intrepid developer some real-world practice in developing a native app using a completely new set of tools ;)

## How to get started

(While still in testing phase...) You can clone the repository here and set up a free account with Expo Go in order to view the app on your device.

git clone https://github.com/kdaysal/chat

## Key Features

* A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

* A page displaying the conversation, as well as an input field and submit button

* The chat provides users with two additional communication features: sending images
and location data.

* Data is able to be stored online and offline.

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

## Technologies Used

* React Native
* Expo Go - for simulation/runtime environment
* Expo CLI - for development / running the server
* ImagePickerAPI
    launchImageLibraryAsync - to open up the device's media library and let the user choose a file
    launchCameraAsync - to open up the device's camera and allow the user to take a photo (in realtime)

## Installation Requirements to Run

* npm / Node.js
* Emulator such as Xcode (iOS) or Android Studio (recommended)
* Expo Go (alternatively)

## Install required packages from package.json

* Download this repo
* Navigate to root folder via CLI
* Install required packages in package.json

## How to Run the App

    * Navigate to the root folder where you cloned the repo
    * In your CLI, run 'npm start' or 'expo start' 
    * Once Expo compiles the project it should display development options in a separate browser window. If this doesn't happen automatically, copy the localhost path from your CLI's output and paste into your browser's url bar.
    * To view the app from a mobile device, use your device's camera (IOS) or from the Expo app itself (Android) to scan the QR Code that is displayed in your browser after Expo has compiled the project
    * Alternatively you can view the app using the preferred emulator of your choice