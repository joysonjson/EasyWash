
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
import offersCommingsoon from '../assets/offersCommingSoon.jpeg'

class OfferScreen extends Component {
  
  
  render() {
    return (
      <ImageBackground
      source={offersCommingsoon}
      style={{ width: "100%", height: "100%" }}
    >
      <View style = {styles.container}>
       </View>
      </ImageBackground>
    );
  }
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
 
});
