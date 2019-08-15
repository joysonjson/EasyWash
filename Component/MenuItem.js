import React, { Component } from 'react';
import {View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import car from '../assets/car.png'
import ServiceDetails from "../Screens/ServiceDetails";
import SuperServiceData from "../Data/SuperServiceData";
import PlatinumServiceData from "../Data/PlatinumServiceData";

import StandardServiceData from "../Data/StandardServiceData";
import sedanImage from '../assets/car.png'
import suvImage from '../assets/car.png'
import xuvImage from '../assets/car.png'
import hbImage from '../assets/car.png'
import superWash from "../assets/superWash.png";

//   _pushToServiceDetails = async (props,id) => {
   
//     props.navigation.navigate("ServiceDetails");
//   };

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.changeData = this.changeData.bind(this);
        this.state = {
          selectedCar: '',
        };

    }

    // carSelected = (data) => {
    //   //  console.log(data)
    //     this.props.referenceCallback(data);

    // };
    changeData(data){
        this.setState({selectedCar: data})
        this.props.referenceCallback(data);
      }

    render() { 
        const { navigation } = this.props;
        _pushToServiceDetails =  (props,id) => {
   
            props.navigation.navigate("ServiceDetails");
          };
        return (
            <View style={styles.menuItem}>
            {/* <Image source={this.props.itemImage}
            style= {styles.itemImage}
            /> */}
            <TouchableOpacity onPress={()=> this.changeData(this.props.itemDetails.id)}  style= {styles.itemImage}>
            <Image source={this.props.itemDetails.image}
            style= {styles.itemImage}
            />
            <Text style={styles.typeOfCar}>{this.props.itemDetails.text}</Text>

            </TouchableOpacity>
          
            </View>

          );
    }
}


export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
      width:'50%',
      height:'50%',
      padding:10, 
      borderColor:'#21a8c6',
      backgroundColor:'#ccc',
      borderWidth:1,
      alignItems:'center',
    },
    itemImage:{
        width:'100%',
        height:'100%',
        opacity:0.8,
 

    },
    typeOfCar:{
        position:'absolute',
        bottom:0,
        
    }
})