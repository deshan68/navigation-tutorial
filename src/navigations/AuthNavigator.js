import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register, Notifications } from "../screens";
import { COLORS, ROUTES } from "../constants";
import DrawerNavigator from "./DrawerNavigator";

//this will return a object it contain > Navigator, screen, group
const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.danger },
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }) => ({
          title: route.params.userID,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false, // header title will not appear because this value is "false"
          headerBackTitle: "Arun", // default it has previuse screen name (Login), now it has "Arun"
        })}
      />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});

export default AuthNavigator;
