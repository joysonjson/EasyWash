import React, { Component } from "react";
import {
  Dimensions,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import profileBackgroundImage from "../assets/ProfileBackground.jpg";

class ProfileScreen extends Component {
 
  constructor() {
    super()
    this.state = {
       myText: ''
    }
    this.loadApp()
 }
  componentDidMount() {
    AsyncStorage.getItem('posts').then(data => this.setState({ data }));
  }
 
loadApp = async () => {
this.setState({myText: await AsyncStorage.getItem("userToken")})

};
 

  render() {
    return (
      <ImageBackground
        source={profileBackgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.badge} />
          <View style={styles.bottomView}>
            <Text style={styles.nameStyle}>{this.state.myText}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  badge: {
    position: "absolute", //Here is the trick
    bottom: 70, //Here is the trick
    width: "100%",
    height: 100,
    borderBottomWidth: 100,
    borderBottomColor: "white",
    borderLeftWidth: 0,
    borderLeftColor: "transparent",
    borderRightWidth: Dimensions.get("window").width,
    borderRightColor: "transparent",
    borderStyle: "solid"
  },
  bottomView: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0 //Here is the trick
  },
  nameStyle:{
    fontSize:25,
    color:'black',
    left:20,
    alignSelf: 'flex-start',
    bottom:30,
    paddingLeft: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  }
});
