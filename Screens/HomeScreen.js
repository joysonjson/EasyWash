import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MenuItem from "../Component/MenuItem";

import RegularPack from "../assets/Group5.png";
import patinumWash from "../assets/patinumWash.png";
import backgroundImage from "../assets/serviecBg.png";
import superWash from "../assets/superWash.png";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ServiceDetails from "./ServiceDetails";
import SuperServiceData from '../Data/SuperServiceData'
import PlatinumServiceData from '../Data/PlatinumServiceData'

import StandardServiceData from '../Data/StandardServiceData'


class HomeScreen extends Component {
  button() {
    Alert.alert(
      'Please select your car.',
      [
        // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
        // {text: 'YES', onPress: () => console.warn('YES Pressed')},
         <View style={styles.menuContainer}>
                       
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} /> }
          </View> 
      ]
    );
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overLayContainer}>
          <View style={styles.RegularPack}>
            <TouchableOpacity onPress={() => this.button()}> 
              <Image source={RegularPack} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Standard</Text>
          </View>
          <View style={styles.RegularPack} >
            <TouchableOpacity onPress={()=> { this.props.navigation.navigate('ServiceDetails', {
    data:SuperServiceData ,
})  }}>
              <Image source={superWash} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Super Wash</Text>
          </View>
          <View style={styles.RegularPack}>
            <TouchableOpacity onPress={()=> { this.props.navigation.navigate('ServiceDetails', {
    data:PlatinumServiceData ,
})  }}>
              <Image source={patinumWash} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Platinum</Text>
          </View>
          {/* <View style={styles.menuContainer}>
            {/*             
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} />
            <MenuItem itemImage={RegularPack} /> }
          </View> */}
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  RegularPack: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  },
  overLayContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.7)",
    alignItems: "center",
    justifyContent: "center"
  },
  menuContainer: {
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  titleContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10
  }
});
