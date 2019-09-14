import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import * as firebase from 'firebase';

class AuthLoadingScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyALYQGhC9p8s-xBiUqMFoV6Oa4B44It7QM",
      authDomain: "easy-wash-joy.firebaseapp.com",
      // databaseURL: "<YOUR-DATABASE-URL>",
      // storageBucket: "<YOUR-STORAGE-BUCKET>"
    };
    // firebase.initializeApp(firebaseConfig);


  }

    constructor(){
        super()
        this.loadApp()
    }
  loadApp = async () => {
  //  await AsyncStorage.setItem("userToken", "Joyson");
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  state = {};
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
