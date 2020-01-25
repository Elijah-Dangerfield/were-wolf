import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import JoinGameScreen from "./screens/JoinGameScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Start: { screen: StartScreen },
  Join: { screen: JoinGameScreen }
});

const App = createAppContainer(MainNavigator);
export default App;
