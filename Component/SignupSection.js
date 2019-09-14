import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import console = require("console");

export default class SignupSection extends Component {
  signUpPage= ()=>{
    console.log('signUp')
    this.props.navigation.navigate("SignUp");
  }
  render() {
    return (
      <View style={styles.container}>
          <View >
          <TouchableOpacity onPress={this.signUpPage}>

            <Text style={styles.text}>Create Account</Text>
            </TouchableOpacity>

          </View>
        <TouchableOpacity onPress={this.signUpPage}>
          <View>
          <Text style={styles.text}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 90,
    height:50,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 50,

  },
  text: {
    // top: 0,
    color: "#2b616d",
  }
});
