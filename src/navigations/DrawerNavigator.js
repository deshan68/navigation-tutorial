import { View, Text } from "react-native";
import { Home, Wallet, Notifications, Settings } from "../screens";
import { COLORS, ROUTES } from "../constants";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: "Wallet",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: "Notifications",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
