import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ctivityIndicator,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


class SettingsScreen extends Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  //   headerLeft:(
  //      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
  //   <View style={{ paddingHorizontal: 10 ,backgrounColor:'red'}}>
  //     {/* <Text>TOUCH ME</Text> */}
  //     <Icon name="md-menu" size={24} color={"red"} />
  //   </View>
  // </TouchableOpacity>
  // )
  // };
  static navigationOptions = function(props) {
    return {
      title: 'Settings',
    }
  };
  
  render() {

    return (
      <View style = {styles.container}>
      {/* <Button title = "Sign out" onPress={this.SignOut} /> */}
      <Text>SettingsScreen!</Text>

      </View>
    );
  }
}

export default SettingsScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
