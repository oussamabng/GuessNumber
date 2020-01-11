import React,{useState} from 'react';
import {View,Text,StyleSheet, TextInput, Button,TouchableWithoutFeedback,Keyboard, Alert} from "react-native";
import Card from "../components/Card";
import Colors from '../constantes/Colors';
import NumberSelected from "../components/NumberSelected";
import Styles from "../constantes/default-text-styles";
import MainButton from "../components/MainButton";
import { Ionicons } from '@expo/vector-icons';

const StartGameScreen = (props)=>{
    const [entredValue,setValue] = useState('');
    const [selectedNumber,setSelectedNumber] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const textInputHandler = text=>{
        setValue(text.replace(/[^-0-9]/g,''));
    }
    const resetHandler = () =>{
        setValue('');
        setConfirmed(false);
    }
    const confirmHandler = () =>{
        let textEntread = parseInt(entredValue);
        if (isNaN(textEntread) || textEntread<=0 || textEntread>99){
           return Alert.alert('Invalid Number','Enter a Number Between 0 and 99',[{text:'okay',style:"destructive",onPress:resetHandler}]);
        }
        setSelectedNumber(textEntread);
        Keyboard.dismiss();
        setValue('');
        setConfirmed(true);
    }
    let ConfirmedOutput;
    if (confirmed){
    ConfirmedOutput = (
        <Card style={styles.selectedCard}>
            <Text style={Styles.bodyText}>You selected</Text>
            <NumberSelected >{selectedNumber}</NumberSelected>
            <MainButton onPress={()=>{props.onStartGame(selectedNumber)}}>
                start game
            </MainButton>
        </Card>
    ) ;
    }
return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
    }}>
  <View style={styles.screen}>
        <Text style={styles.title,Styles.titleText}>
            Start a New Game
        </Text>
        <Card style={styles.inputContainer}>
            <Text style={Styles.bodyText}>
                Select a Number
            </Text>
            <TextInput value={entredValue} onChangeText={textInputHandler} maxLength={2} autoCapitalize="none" autoCorrect={false} blurOnSubmit keyboardType="number-pad"   style={styles.input}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button title="Confirm" onPress={confirmHandler} color={Colors.primary}/>
                </View> 
                <View style={styles.button}>
                <Button title="reset" onPress={resetHandler} color={Colors.secondary}/>
                </View>             
            </View>
        </Card>
        {ConfirmedOutput}
    </View>
    </TouchableWithoutFeedback>
)
}
const styles = StyleSheet.create({
screen:{
    flex:1,
    padding :10,
    alignItems:"center"
},
input:{
    borderColor:"black",
    borderBottomWidth:1,
    color:"#000",
    width:50,
    textAlign:"center"
},
title:{
    marginVertical:10,
},
inputContainer:{
    width:350,
    maxWidth:"80%",
    alignItems:"center",
    padding:10,
    margin:10,
},
buttonContainer:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal:15,
    marginVertical:20,
},
button:{
    width:80
},
selectedCard:{
    width:200,
    maxWidth:"70%",
    alignItems:"center",
    marginVertical:15
},
});
export default StartGameScreen;