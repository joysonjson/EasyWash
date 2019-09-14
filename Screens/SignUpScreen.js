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
import ButtonSubmit from '../Component/SignUpButton'

class SignUpScreen extends Component {
  render() {
    return (
      <WallPaper >
        <Logo />
        <Form  style={styles.form}/>

        <ButtonSubmit  />
      
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
