// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TextInput,
//   AsyncStorage,
//   Alert,
//   Keyboard,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Animated,
//   Image
// } from "react-native";
// import imgLoading from "../assets/loading.gif";

// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Logo from "../Component/Logo";
// import MyTextInput from "../Component/MyTextInput";
// import MyButton from "../Component/MyButton";
// import { diff } from "../constants/Colors";
// import { myWidth, myHeight } from "../constants/Colors";
// import * as colors from "../constants/Colors";

// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );
// class SignInScreen extends Component {
//   _isMounted = false;

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       isLoading: false
//     };
//     this.buttonAnimated = new Animated.Value(0);
//   }
//   state = {
//     username: ""
//   };
//   _animation(obj, toValue, duration) {
//     console.log("_animation");

//     if (this._isMounted) {
//       Animated.timing(obj, {
//         toValue,
//         duration
//       }).start();
//     }
//   }

//   componentDidMount() {
//     this._isMounted = true;
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     this._isMounted = false;
//   }

//   signIn = async () => {
//     if (this.state.isLoading) return;

//     this.setState({ isLoading: true });
//     this._animation(this.buttonAnimated, 1, 200);

//     if (this.state.username === "") {
//       Alert.alert("Enter your name.");
//       return;
//     }
//     if (this._isMounted) {
//       await AsyncStorage.setItem("userToken", this.state.username);
//       this.buttonAnimated = new Animated.Value(0);

//       console.log("App");

//       this.props.navigation.navigate("App");
//     }
//   };

//   render() {
//     const changeWidth = this.buttonAnimated.interpolate({
//       inputRange: [0, 1],
//       outputRange: [myWidth * 0.9, myHeight * 0.08]
//     });
//     return (
//       <DismissKeyboard>
//         <View style={styles.container}>
//           <Logo />
//           <View style={{ height: 50 }} />
//           <View style={styles.SectionStyle}>
//             <MaterialCommunityIcons name='email' style={styles.ImageStyle} />
//             <TextInput
//               value={this.state.username}
//               onChangeText={username => this.setState({ username })}
//               placeholder={this.props.placeholder}
//               autoCapitalize="none"
//               placeholder={"Email"}
//               autoCorrect={false}
//               underlineColorAndroid="transparent"
//               secureTextEntry={this.props.secureTextEntry}
//               style={styles.textInput}
//             />
//           </View>

//           <View style={{ height: 20 }} />
//           <MyTextInput placeholder="Password" secureTextEntry />
//           <View style={{ height: 50 }} />
//           <Animated.View style={{ width: changeWidth }}>
//             <TouchableOpacity
//               ctiveOpacity={0.8}
//               style={styles.btn}
//               onPress={this.signIn}
//             >
//               <View>
//                 {this.state.isLoading ? (
//                   <Image source={imgLoading} style={styles.imgLoading} />
//                 ) : (
//                   <Text style={styles.txt}>Sign In</Text>
//                 )}
//               </View>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>
//       </DismissKeyboard>
//     );
//   }
// }

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: diff,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   textInput: {
//     width: myWidth * 0.9,
//     height: myHeight * 0.08,
//     borderRadius: myHeight * 0.04,
//     paddingHorizontal: myWidth * 0.05,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: "gray",
    

//   },
//   btn: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: myHeight * 0.08,
//     borderRadius: myHeight * 0.04,
//     backgroundColor: colors.PRIMARY
//   },
//   SectionStyle: {
//     // backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     // width: myWidth - 40,
//      height: 40,
//     // marginHorizontal: 20,
//     // paddingLeft: 30,
//     // borderRadius: 20,
//     // color: '#ffffff',
//   },
//   ImageStyle: {
//     position: 'absolute',
//     zIndex: 99,
//     width: 30,
//     height: 30,
//     left: 20,
//     top: 20,

//   }
// });

 import imgLoading from "../assets/loading.gif";

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../Component/Logo1';
import Form from '../Component/Form';
import Wallpaper from '../Component/Wallpaper';
import ButtonSubmit from '../Component/ButtonSubmit';
import Dimensions from 'Dimensions';
import { diff } from "../constants/Colors";
import { myWidth, myHeight } from "../constants/Colors";
import * as colors from "../constants/Colors";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native';

import UserInput from '../Component/UserInput';
import SignupSection from '../Component/SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import { sin } from 'react-native/Libraries/Animated/src/Easing';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class SignInScreen extends Component {
  _animation(obj, toValue, duration) {
    console.log("_animation");

    if (this._isMounted) {
      Animated.timing(obj, {
        toValue,
        duration
      }).start();
    }
  }

  signIn = async () => {
    
    if (this.state.isLoading) return;

    this.setState({ isLoading: true });
    this._animation(this.buttonAnimated, 1, 200);

    if (this.state.username === "") {
      Alert.alert("Enter your name.");
      return;
    }
      
    setTimeout(() => {
      this.setState({ isLoading: false });
      this._animation(this.buttonAnimated, 0, 200);
  }, 2000);
      await AsyncStorage.setItem("userToken", this.state.username);
      this.buttonAnimated = new Animated.Value(0);

      console.log("App");

      this.props.navigation.navigate("App");
  
  };

      
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false
    };
    this.buttonAnimated = new Animated.Value(0);
  }
  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [myWidth * 0.9, myHeight * 0.08]
    });
    return (
    // <DismissKeyboard>
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
   </Wallpaper> 
  //  </DismissKeyboard>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: myHeight * 0.08,
    borderRadius: myHeight * 0.04,
    backgroundColor: colors.PRIMARY
  },
});
export default SignInScreen;
