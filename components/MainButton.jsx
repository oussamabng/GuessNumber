import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity, Button } from 'react-native';
import Colors from '../constantes/Colors';
import Styles from "../constantes/default-text-styles";

const MainButton = props=>{
return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.buttonContainer,...props.style}}>
            <Text numberOfLines={1} style={styles.title}>{props.children}</Text>
        </View>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:Colors.primary,
        paddingHorizontal:25,
        paddingVertical:15,
        borderRadius:20,
    },
    title:{
        ...Styles.bodyText,
        color:"white",
        fontSize:18,
        textAlign:"center",
    }
});

export default MainButton;