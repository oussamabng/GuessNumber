import React from "react";
import {StyleSheet, View , Text} from "react-native";
import Colors from "../constantes/Colors";
import Styles from "../constantes/default-text-styles";
const Header = (props)=>{
return(
    <View style={styles.header}>
       <Text style={Styles.titleText}>
           {props.title}
       </Text>
    </View>
)
}

const styles = StyleSheet.create({
header:{
    paddingTop: 36,
    backgroundColor : Colors.primary,
    width :"100%",
    height:90,
    justifyContent:"center",
    alignItems:"center"
}
});

export default Header;