import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";

import UserInput from "./UserInput";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";

import usernameImg from "../images/username.png";
import passwordImg from "../images/password.png";
import eyeImg from "../images/eye_black.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: ""
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }
  handleChange(ev) {
    this.setState({ placeholder: ev.nativeEvent.text.length == 0 });
    this.props.onChange && this.props.onChange(ev);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    // const {style,...otherProps} = {this.props}
    const { onChange, ...rest } = this.props;
    const { text, onPress} = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
          value={this.state.email}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={this.state.password}
        />
        {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    // backgroundColor:'white',
    // top:0,
  },
  btnEye: {
    position: "absolute",
    top: 20,
    right: 28
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: "rgba(0,0,0,0.2)"
  }
});
