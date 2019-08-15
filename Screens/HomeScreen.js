import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Modal,
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
import SuperServiceData from "../Data/SuperServiceData";
import PlatinumServiceData from "../Data/PlatinumServiceData";

import StandardServiceData from "../Data/StandardServiceData";
import { Dialog } from "react-native-simple-dialogs";
import CustomDialog from "../Component/CustomDialog";
import sedanImage from '../assets/car.png'
import suvImage from '../assets/car.png'
import xuvImage from '../assets/car.png'
import hbImage from '../assets/car.png'
const arrayOfServiceDetails = [
  {
    serviceId: 0,
    data:StandardServiceData,
  },
  {
    serviceId: 1,
    data:SuperServiceData,
  },
  {
    serviceId: 2,
    data:PlatinumServiceData,
  },
]
const arrayOfImagesForAlert =  [
  {
  id: 0,
  image:hbImage,
  text: "Hatchback"
},
{
  id: 1,
  image:superWash,
  text: "Sedan"
},
{
  id: 2,
  image:suvImage,
  text: "SUV"
},
{
  id: 3,
  image:superWash,
  text: "XUV"
},
]

class HomeScreen extends Component {

  constructor(props) {
    super(props);
       this.callbackFromB = this.callbackFromB.bind(this);
       this.state = {
        selctedCar: undefined,
        showDialog: false,

       };
    }

  state = {
    showDialog: false,
    selctedCar : undefined
  };
  openDialog = (show,serviceId) => {
    this.setState({selctedService: serviceId})
    this.setState({ showDialog: show });
  };
  callbackFromB(data){
    console.log(data)
    this.setState({ selctedCar: data});
    this.openDialog(false)
    this.pushToServiceDetails(data)
 }
  //pushing to the service details screen.
    pushToServiceDetails = (id) => {
    this.props.navigation.navigate('ServiceDetails',{
      data:arrayOfServiceDetails[this.state.selctedService].data[id] ,
    })
    };
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overLayContainer}>
          <View style={styles.RegularPack}>
            <TouchableOpacity
              transparent={true}
              onPress={() => this.openDialog(true,0)}
            >
              <Image source={RegularPack} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Standard</Text>
          </View>
          <View style={styles.RegularPack}>
            <TouchableOpacity
              onPress={() => this.openDialog(true,1)}
            >
              <Image source={superWash} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Super Wash</Text>
          </View>
          <View style={styles.RegularPack}>
            <TouchableOpacity
              onPress={() => this.openDialog(true,2)}
            >
              <Image source={patinumWash} style={{ height: 90, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Platinum</Text>
          </View>

          <Dialog
            title="Selcect your car"
            animationType="fade"
            contentStyle={{
              alignItems: "center",
              justifyContent: "center"
            }}
            onTouchOutside={() => this.openDialog(false)}
            visible={this.state.showDialog}
          >
            <View style={styles.menuContainer}>
              <MenuItem onRef={ref => (this.referenceCallback = ref)}
       referenceCallback = {this.callbackFromB.bind(this)} itemDetails={arrayOfImagesForAlert[0]}/>
              <MenuItem onRef={ref => (this.referenceCallback = ref)}
       referenceCallback = {this.callbackFromB.bind(this)} itemDetails={arrayOfImagesForAlert[1]}/>
              <MenuItem onRef={ref => (this.referenceCallback = ref)}
       referenceCallback = {this.callbackFromB.bind(this)} itemDetails={arrayOfImagesForAlert[2]}/>
              <MenuItem onRef={ref => (this.referenceCallback = ref)}
       referenceCallback = {this.callbackFromB.bind(this)} itemDetails={arrayOfImagesForAlert[3]}/>

            </View>
            <Button
              onPress={() => this.openDialog(false)}
              style={{ position: "absolute", bottom: 0, left: 0 }}
              title="CLOSE"
            />
          </Dialog>
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
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
    borderColor: "#1e1adb",
    borderWidth: 2
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
