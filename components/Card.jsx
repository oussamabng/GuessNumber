import React from "react";
import {StyleSheet,View} from "react-native";

const Card = (props)=>{
    return(
        <View style={{...styles.container,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        elevation:15,
        padding:20,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }
})

export default Card;