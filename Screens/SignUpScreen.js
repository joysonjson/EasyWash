import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import Form from "../Component/SignUpForm";
import Logo from "../Component/Logo1";
import WallPaper from "../Component/Wallpaper";
import ButtonSubmit from '../Component/ButtonSubmit'
import firebase from 'firebase'


class SignUpScreen extends Component {
  constructor(props){
    super(props)
    this.setState = {
      email : "",
      password:"",
    }
    this.signUp = this.signUp.bind(this);

  }
  signUp = async () => {
    const { navigate } = this.props.navigation;

    console.log("signUp");

    // if (this.state.email === "") {
    //   Alert.alert("Enter your name.");
    //   return;
    // }

    firebase
      .auth()
      .createUserWithEmailAndPassword("newJoy@gmail.com","123456")
      .then(
        () => {
          console.log("then");
          this.props.navigation.navigate("SignIn");
        },
        error => {
          console.log(error, "eroor in login");
        }
      );

    console.log("App");
  };

  render() {
    return (
      <WallPaper >
        <Logo />
        <Form  style={styles.form}/>

        <ButtonSubmit onPress={() => {
            this.signUp();
            
          }}
          buttonTitle = "SIGN UP"
          navigation={this.props.navigation}
           />
      
      </WallPaper>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ccc',
    flexDirection:'column',
  },
  form:{
    backgroundColor:'red',
  }
});
