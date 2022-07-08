import React from 'react';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'; //KeyboardAvoidingView is a React Native component used to fix the issue of Android keyboard hiding the message input field
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

//using firebase for my database (RTA)
const firebase = require('firebase');
require('firebase/firestore');

// The application’s main Chat component that renders the chat UI
export default class Chat extends React.Component {

  constructor() {
    super();
    //initialize state of messages and uid to blank/0
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: '',
        name: '',
      },
    }

    //set up Firebase configs for MyChatAppKD app
    const firebaseConfig = {
      apiKey: "AIzaSyAAJUbiS1ji7yp7B8J5736MMk2QbndJRWA",
      authDomain: "mychatapp-9f87d.firebaseapp.com",
      projectId: "mychatapp-9f87d",
      storageBucket: "mychatapp-9f87d.appspot.com",
      messagingSenderId: "986516990853",
      appId: "1:986516990853:web:33fe4e86ab153227af32ec",
      measurementId: "G-7VELSNFLZZ"
    };

    //initialize the Firebase app
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    //create a reference for my Firstore "messages" collection. This will store and retrieve the chat messages that users send
    this.referenceChatMessages = firebase.firestore().collection("messages");

  }//end constructor

  componentDidMount() {
    //Extract the user's name from the Start page
    let name = this.props.route.params.name;

    //Sets the page title to the user's name
    this.props.navigation.setOptions({ title: name });

    //create a reference for Firebase to fetch the 'messages' collection after the component has mounted
    //TODO - add 'if' logic to check whether "messages" collection is null/undefined before executing the line below
    this.referenceChatMessages = firebase.firestore().collection("messages");

    //create user authentication (as signInAnonymously)
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });

    //stop receiving updates about the 'messages' collection
    this.unsubscribe = this.referenceChatMessages.onSnapshot(this.onCollectionUpdate)
  }// end componentDidMount

  componentWillUnmount() {
    this.unsubscribe();
  }

  //whenever something changes in the "messages" collection, retrieve the current data in the collection and store it in my state lists
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
  }

  // Add new messages to the Firestore database collection
  // 'uid' will give log the user in with a new unique user ID every time they open up the app
  addMessages = (message) => {
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
  };

  // this feeds the GiftedChat component messages from the state object
  // TODO - add a call to addMessages so that the new message gets added to the "messages" collection whenever the user sends a new message (task #4.3)
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {
      this.addMessages(this.state.messages[0]); //pass the most recent message that was sent to the addMessages function. Most recent message will be the first element of the 'messages' array (i.e. index 0)
    });
  }

  //this will let me change the background color of the left (receiving) or right (sending) text bubble
  renderBubble(props) {
    // If the user has selected the "almost entirely black" background, I want the sender's bubble background to be a lighter color for contrast
    // otherwise, set the sender's bubble  color to black.
    let senderBubbleColor = '#000';
    if (this.props.route.params.selectedBackgroundColor === '#090C08') {
      senderBubbleColor = '#abc497'
    }
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: senderBubbleColor
          }
        }}
      />
    )
  }

  render() {

    //Set backgroundColor on Chat page to what the user selected on the Start page
    const selectedBackgroundColor = this.props.route.params.selectedBackgroundColor;


    return (
      <View style={styles.chatView} backgroundColor={selectedBackgroundColor}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatView: {
    //backgroundColor: "red",
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

