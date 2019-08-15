import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  AsyncStorage
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";
import { AppLoading } from "expo";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignInScreen from "./Screens/SignInScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import AuthLoadingScreen from "./Screens/AuthLoadingScreen";
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./Screens/ProfileScreen";
import OfferScreen from "./Screens/OfferScreen";
import LiveChatScreen from "./Screens/LiveChatScreen";
import RegularPack from "./assets/RegularPack.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import offersImage from "./assets/offers.png";
import offersBlueImage from "./assets/offersBlue.png";
import logoImage from "./assets/appIcon.png";
import logOut from './Screens/SettingsScreen';
import AppDrwaNavigator from './sideDrawer'

const AuthStackNavigation = createStackNavigator({
 
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: "Welcome",
      headerTitleStyle: {
        textAlign:"center", 
        flex:1 
      
      }
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: "Sign In",
      headerRight: <View/>,
      headerTitleStyle: {
        textAlign:"center", 
        flex:1 
      
      }
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "Sign Up",
      headerRight: <View/>,

      headerTitleStyle: {
        textAlign:"center", 
        flex:1 
      
      }
    }
  },
});


const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigation,
  App: AppDrwaNavigator
});
export default createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
