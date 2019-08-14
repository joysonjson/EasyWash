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

// const customDrawerComponent = props => (
 
//   <SafeAreaView style={{ flex: 1 }}>
//     <View
//       style={{
//         height: 150,
//         backgroundColor: "white",
//         alignItems: "center",
//         justifyContent: "center"
//       }}
//     >
//       <Image
//         source={logoImage}
//         style={{ height: 150, width: 150, borderRadius: 60 }}
//       />
//     </View>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// );

// const AppTabNavigator = createBottomTabNavigator({
//   Services: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: "Services",
//       title: "Services",
//       tabBarIcon: ({ focused }) =>
//         // <Icon name="md-home" size={24}  color="blue"/>
//         focused ? (
//           <Entypo name="tools" size={24} color="blue" />
//         ) : (
//           <Entypo name="tools" size={24} />
//         ),
//       // focused ? (
//       //   < EvilIcons name= "user" size={32} color="blue" />
//       // ) : (
//       //   < EvilIcons name= "user" size={32} />

//       // ),
//       tabBarOptions: {
//         activeTintColor: "blue",
//         marginBottom: 10,
//         style: {
//           height: 50
//         },
//         labelStyle: {
//           marginBottom: 5,
//         },
     
//       }
//     }
//   },
//   Profile: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: "Profile",
//       title: "Profile",
//       tabBarIcon: ({ focused }) =>
//         focused ? (
//           <EvilIcons name="user" size={32} color="blue" />
//         ) : (
//           <EvilIcons name="user" size={32} />
//         ),
//       tabBarOptions: {
//         activeTintColor: "blue"
//       }
//     }
//   },
//   Offers: {
//     screen: OfferScreen,

//     navigationOptions: {
//       tabBarLabel: "Offers",
//       title: "Offers",
//       tabBarIcon: ({ focused, tintColor }) =>
//         focused ? (
//           <Image source={offersBlueImage} style={{ width: 24, height: 24 }} />
//         ) : (
//           <Image source={offersImage} style={{ width: 24, height: 24 }} />
//         ),
//       tabBarOptions: {
//         activeTintColor: "blue"
//       }
//     }
//   },
//   Chat: {
//     screen: LiveChatScreen,
//     navigationOptions: {
//       tabBarLabel: "Live Chat",
//       title: "Live Chat",
//       tabBarIcon: ({ focused }) =>
//         focused ? (
//           <Icon name="ios-chatboxes" color="blue" size={24} />
//         ) : (
//           <Icon name="ios-chatboxes" size={24} />
//         ),
//       tabBarOptions: {
//         activeTintColor: "blue"
//       }
//     }
//   }
// });

// AppTabNavigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];

//   // You can do whatever you like here to pick the title based on the route name
//   const headerTitle = routeName;

//   return {
//     headerTitle
//   };
// };

_logout = async (props) => {
  await AsyncStorage.removeItem('userToken');
  props.navigation.navigate('AuthLoading');
}

// const AppStackNavigator = createStackNavigator({
//   HomeTab: {
//     screen: AppTabNavigator,
//     navigationOptions: ({ navigation }) => ({
//       //title: "Easy Wash",
//       headerStyle: {
//         backgroundColor: "black"
//       },
//       headerTintColor: "#fff",
//       headerLeft: (
//         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//           <View style={{ paddingHorizontal: 10 }}>
//             {/* <Text>TOUCH ME</Text> */}
//             <Icon name="md-menu" size={24} color={"white"} />
//           </View>
//         </TouchableOpacity>
//       )
//     })
//   }
// });

// const AppDrwaNavigator = createDrawerNavigator({
//     // Home: AppStackNavigator,
//     Services : { screen: AppStackNavigator,
//       navigationOptions: {
//       drawerIcon: ({tintColor}) => (
//         <Entypo name="tools" size={24}  color={tintColor} />
        
//          ),
//         drawerLabel: 'Services',
//        },
//      },
//      SignOut : { screen: SettingsScreen,
//       navigationOptions: {
//       drawerIcon:  ({tintColor})=>(
//            <MaterialCommunityIcons name="logout" size={24}  color={tintColor}
          
//                //you can also add color and other Icon props here                        
//            />
//          ),
//          drawerLabel: 'Sign Out',
//        },
//      },
//   },
//   {
//     contentComponent:(props) => (
//       <View style={{flex:1}}>
//           <SafeAreaView forceInset={{ horizontal: 'never' }}>
//               <DrawerItems {...props} />
//               <Button title="Logout" onPress={ () => this._logout(props) }/>
//           </SafeAreaView>
//       </View>
//     ),
//       drawerOpenRoute: 'DrawerOpen',
//       drawerCloseRoute: 'DrawerClose',
//       drawerToggleRoute: 'DrawerToggle'
//   },
  
//   {
//     contentComponent: customDrawerComponent,
//     contentOptions: {
//       activeTintColor: "blue",
//       inactiveTintColor: "#A9A9A9"
//     }
//   }
// );
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
