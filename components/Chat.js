import React from 'react';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'; //KeyboardAvoidingView is a React Native component used to fix the issue of Android keyboard hiding the message input field
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

// The application’s main Chat component that renders the chat UI
export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    //Extract the user's name from the Start page
    let name = this.props.route.params.name;

    //Sets the page title to the user's name
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello " + name + "!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: "Hi " + name + ", you've entered the chat!",
          createdAt: new Date(),
          system: true,
        },
      ],
    })
  }// end componentDidMount

  // this feeds the GiftedChat component messages from the state object
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
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