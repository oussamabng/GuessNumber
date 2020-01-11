import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen"; 
import GameScreen from "./screens/GameScreen";
import ResultGameScreen from "./screens/ResultGameScreen";
import * as Font from "expo-font";
import {AppLoading} from "expo";

const fetchFonts = ()=>{
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
}
export default function App() {
  const [gameStarted,setGame] = useState();
  const [gameOver,setGameOver] = useState(false);
  const [attemptGame,setAttemptGame] = useState();
  const [fetchData,setFetchData] = useState(false);
  if (!fetchData){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{setFetchData(true)}}/>
  }
  const screensHandler = (selectedNumber)=>{
    setGame(selectedNumber);
    }
  const handleGame = (attempt,number)=>{
    setGame(number);
    setGameOver(true);
    setAttemptGame(attempt);
    }
  const newGame = ()=>{
    setGameOver(false);
    setGame(null);
    setAttemptGame(0);
  }
  let Content =  <StartGameScreen onStartGame={screensHandler}/> ;
  if (gameOver){
    Content = <ResultGameScreen home={newGame.bind(this)} number={gameStarted} attempt={attemptGame}/> ; 
  }else if(gameStarted){
      Content = <GameScreen gameOver={handleGame.bind(this)} userChoice={gameStarted}/>
    }
    
  return (
    <View style={styles.container}>
      <Header title="Guess a number"/>
      {Content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
