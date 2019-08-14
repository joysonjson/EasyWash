import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  AsyncStorage,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
class SignInScreen extends Component {
  state = {
    username:''
  };



  signIn =  async () =>{
    if (this.state.username === ''){
    
      Alert.alert("Enter your name.")
      return
    
    }

    
    await AsyncStorage.setItem('userToken',this.state.username)
    this.props.navigation.navigate('App')
  }
  
  render() {
    return (
      <DismissKeyboard>
      <View style = {styles.container}>
       <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <Button title= "Complete Sign In" onPress= {this.signIn}></Button>
      </View>
      </DismissKeyboard>

    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
