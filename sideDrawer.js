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
import { AntDesign } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { EvilIcons } from "@expo/vector-icons";
import offersImage from "./assets/offers.png";
import offersBlueImage from "./assets/offersBlue.png";
import logoImage from "./assets/Logo.jpg";
import logOut from "./Screens/SettingsScreen";
import ServiceDetails from './Screens/ServiceDetails'

const AppTabNavigator = createBottomTabNavigator({
  Services: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Services",
      title: "Services",
      tabBarIcon: ({ focused }) =>
        // <Icon name="md-home" size={24}  color="blue"/>
        focused ? (
          <Entypo name="tools" size={24} color="#0bade3" />
        ) : (
          <Entypo name="tools" size={24} />
        ),
      // focused ? (
      //   < EvilIcons name= "user" size={32} color="blue" />
      // ) : (
      //   < EvilIcons name= "user" size={32} />

      // ),
      tabBarOptions: {
        activeTintColor: "#0bade3",
        marginBottom: 10,
        style: {
          height: 50
        },
        labelStyle: {
          marginBottom: 5
        }
      }
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      title: "Profile",
      tabBarIcon: ({ focused }) =>
        focused ? (
          <EvilIcons name="user" size={32} color="#0bade3" />
        ) : (
          <EvilIcons name="user" size={32} />
        ),
      tabBarOptions: {
        activeTintColor: "#0bade3"
      }
    }
  },
  Offers: {
    screen: OfferScreen,

    navigationOptions: {
      tabBarLabel: "Offers",
      title: "Offers",
      tabBarIcon: ({ focused, tintColor }) =>
        focused ? (
          <Image source={offersBlueImage} style={{ width: 24, height: 24 }} />
        ) : (
          <Image source={offersImage} style={{ width: 24, height: 24 }} />
        ),
      tabBarOptions: {
        activeTintColor: "#0bade3"
      }
    }
  },
  Chat: {
    screen: LiveChatScreen,
    navigationOptions: {
      tabBarLabel: "Live Chat",
      title: "Live Chat",
      tabBarIcon: ({ focused }) =>
        focused ? (
          <Icon name="ios-chatboxes" color="#0bade3" size={24} />
        ) : (
          <Icon name="ios-chatboxes" size={24} />
        ),
      tabBarOptions: {
        activeTintColor: "#0bade3"
      }
    }
  }
});

const customDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 150,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        
         
        }}
      >
        <Image
          source={logoImage}
          style={{ height: 150, width: 150, borderRadius: 75 ,borderColor:'#21a8c6',  overflow: "hidden",
          borderWidth: 3,
        }}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
        {/* <Button
        title="Logout"
        style = {styles.logOutButton}
        onPress={() => this._logout(props) }/> */}
        <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
          <AntDesign name= 'logout' size={20} style={styles.icon}/>
        </View>
        <Text style={styles.label}>Logout</Text>
      </View>
    </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  
);

AppTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle
  };
};

const AppStackNavigator = createStackNavigator({
  HomeTab: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      //title: "Easy Wash",
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            {/* <Text>TOUCH ME</Text> */}
            <Icon name="md-menu" size={24} color={"white"} />
          </View>
        </TouchableOpacity>
      )
    })
  },
  ServiceDetails:{
    screen:ServiceDetails,
    navigationOptions: ({ navigation }) => ({
      title: "Details Serive",
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
     
    })
  }
});

const settingsStackView = createStackNavigator({
  HomeTab: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      //title: "Easy Wash",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            {/* <Text>TOUCH ME</Text> */}
            <Icon name="md-menu" size={24} color={"white"} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});
_logout = async props => {
  await AsyncStorage.removeItem("userToken");
  props.navigation.navigate("AuthLoading");
};
const AppDrwaNavigator = createDrawerNavigator(
  {
    Services: {
      screen: AppStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Entypo name="tools" size={24} color={tintColor} />
        ),
        drawerLabel: "Services"
      }
    },
    SignOut: {
      screen: settingsStackView,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-settings" size={24} color={tintColor} />
        ),
        drawerLabel: "Settings"
      }
    }
  },

  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: "#0bade3",
      inactiveTintColor: "#A9A9A9"
    }
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logOutButton: {
    position: "absolute"
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'blue'

  },
  label: {
    margin: 16,
    color: "#A9A9A9",
    fontWeight:'bold',
    // backgroundColor:'yellow'
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: "center",
    // backgroundColor:'red',

    

  },
  icon: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    // marginTop:10,
     color:'#A9A9A9',

  }
});

export default AppDrwaNavigator;
