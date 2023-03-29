import * as React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthNavigator from "./src/navigations/AuthNavigator";
const Stack = createStackNavigator();

export default function App() {
  //  isAuthenticated = is....
  return (
    <NavigationContainer>
      {/* isAuthenticated ? AuthNavigator : DrawerNavigator */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
