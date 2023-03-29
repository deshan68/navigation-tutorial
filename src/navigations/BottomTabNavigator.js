import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Wallet, Notifications, Settings } from "../screens";
import { COLORS, ROUTES } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsNavigator from "./SettingsNavigator";
import CustomeTabBarButton from "../components/CustomeTabBarButton";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: COLORS.dark,
        // tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          }
          return <Icon name={iconName} size={20} color={color}></Icon>;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        // options={{
        //   tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        // options={{
        //   tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        // options={{
        //   tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        // options={{
        //   tabBarLabel: "Settings",
        //   tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        // }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    left: 10,
    right: 10,
    height: 88,
  },
});
