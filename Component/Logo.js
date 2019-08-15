import React from 'react';
import { Image, StyleSheet } from 'react-native';
import imgLogo from '../assets/appIcon.png';
import * as colors from '../constants/Colors';

const Logo = (props) => (
    <Image source={imgLogo} style={styles.img}/>
);

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        borderRadius: 75 ,
        borderColor:'#21a8c6',  
        overflow: "hidden",
        borderWidth: 3,
    },
});

export default Logo;
