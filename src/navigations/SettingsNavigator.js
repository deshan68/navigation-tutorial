import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Settings, SettingsDetail } from "../screens";
import { COLORS, ROUTES } from "../constants";

//this will return a object it contain > Navigator, screen, group
const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.danger },
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});

export default SettingsNavigator;
