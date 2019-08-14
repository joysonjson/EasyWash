import React, { Component } from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

class MenuItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return (
            <View style={styles.menuItem}>
            <Image source={this.props.itemImage}
            style= {styles.itemImage}
            />


            </View>

          );
    }
}


export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
      width:'50%',
      height:'50%',
      padding:20, 
    //   borderColor:'#000',
    //   backgroundColor:'#ccc',
    //   borderWidth:2,
    },
    itemImage:{
        width:'100%',
        height:'100%',
        opacity:0.8,
        borderColor:'#abcdef',
        borderWidth:5,
        backgroundColor:'#fff'

    }
})