import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  ActivityIndicator,
  TextInput
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

class LiveChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  signIn = async () => {
    await AsyncStorage.setItem("userToken", "Joyson");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type message..."
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Icon style={styles.sendButton}name="md-send" size={40} color="blue" />
      </View>
    );
  }
}

export default LiveChatScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:40,
    bottom: 0 ,//Here is the trick
    position: "absolute", //Here is the trick


  },
  sendButton: {
    // width: "30%",
    marginRight:20,
  },
  textInput: {
    width: "70%",
    marginLeft:30,
    height:40,
  }
});
