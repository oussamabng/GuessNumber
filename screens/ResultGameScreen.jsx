import React,{useState} from "react";
import {StyleSheet,View,Text, Button,Image} from "react-native";
import Styles from "../constantes/default-text-styles";
import Colors from "../constantes/Colors";

const ResultGameScreen = props=>{
return(
    <View style={styles.screen}>
        <Text style={Styles.titleText}>
           The Game is Over!
        </Text>
        <View style={styles.imgContainer}>  
        <Image resizeMode="cover" style={styles.image} source={require("../assets/img/success.png")}/>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.mainText}>
            Your Phone needed <Text style={styles.specialText}>{props.attempt}</Text > to guess the number <Text style={styles.specialText}>{props.number}</Text>
        </Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="new game" onPress={props.home}/>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        padding:15
    },
    imgContainer:{
        maxWidth:"80%",
        width:300,
        height:300,
        borderWidth:3,
        borderRadius:150,
        borderColor:"black",
        overflow:"hidden",
        marginVertical:15
    },
    image:{
        width:"100%",
        height:"100%"
    },
    specialText:{
        color:Colors.primary,
        ...Styles.bodyText,
        fontSize:20
    },
    mainText:{
        ...Styles.bodyText,
        fontSize:20,
        textAlign:"center",

    },
    textContainer:{
        width:"80%",
        marginHorizontal:15,
    }
})

export default ResultGameScreen;