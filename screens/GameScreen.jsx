import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet, Button, Alert} from "react-native";
import NumberSelected from '../components/NumberSelected';
import Card from '../components/Card';
import Styles from "../constantes/default-text-styles";
import MainButton from "../components/MainButton";
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min,max,exclude)=>{
    const randomNumber = Math.round(Math.random() *(max-min))+min;
    return (randomNumber === exclude) ?  generateRandomBetween(min,max,exclude) : randomNumber
}
const GameScreen = props=>{
    const highestNumber = useRef(100);
    const minimumNumber = useRef(1);
    const [numberChoosen,setNumberChoosen] = useState(generateRandomBetween(minimumNumber.current,highestNumber.current,props.userChoice));
    const [attempt,setAttempt] = useState(0);
   
    useEffect(()=>{
        if (numberChoosen === props.userChoice){
            props.gameOver(attempt,numberChoosen);
        }
    });
  
const summaryHandler = (status)=>{
    if (((status === "lower") && (numberChoosen< props.userChoice)) ||(( status=== "greater")&& (numberChoosen> props.userChoice))){
        Alert.alert("Dont\'t lie","you know that this is wrong...",[{text:"sorry",style:"cancel"}])
    }else if (status === "lower"){
        highestNumber.current = numberChoosen;
        const customNumber = generateRandomBetween(minimumNumber.current,highestNumber.current,numberChoosen);
        setNumberChoosen(customNumber);
        setAttempt(attempt+1);
    }
    else if (status === "greater"){
        minimumNumber.current = numberChoosen ;
        const customNumber = generateRandomBetween(minimumNumber.current,highestNumber.current, numberChoosen);
        setNumberChoosen(customNumber);
        setAttempt(attempt+1);
    }
}
    return(
        <View style={styles.screen}>
            <Text style={styles.title,Styles.bodyText}>Opponent's Guess</Text>
            <NumberSelected>{numberChoosen}</NumberSelected>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={summaryHandler.bind(this,"lower")}>
                <Ionicons name="md-remove" size={32} color="white" />
                </MainButton>
                <MainButton onPress={summaryHandler.bind(this,"greater")}>
                <Ionicons name="md-add" size={32} color="white" />
                </MainButton>
            </Card>
        </View>
    )
};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        marginVertical:15,
    },
    title:{
        fontSize:18,
        color:"black",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:300,
        maxWidth:"75%",
        paddingVertical:20,
        margin:10
    }
});

export default GameScreen;