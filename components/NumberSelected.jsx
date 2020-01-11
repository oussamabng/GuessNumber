import  React from 'react';
import {View,Text,StyleSheet} from "react-native";
import Colors from "../constantes/Colors";

const NumberSelected = (props)=>{
    return(
        <View style={styles.numberSelectedBox}>
                <Text style={styles.number}>
                {props.children}
                </Text>
            </View>
    )
}


const styles = StyleSheet.create({
    numberSelectedBox:{
        borderWidth:1.5,
        borderRadius:10,
        borderColor:Colors.secondary,
        padding:10,
        margin:10
    },
    number:{
        color:Colors.secondary,
        fontSize:22
    }
});
export default NumberSelected;