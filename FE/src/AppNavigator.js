import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screen/Splash";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Home from "./Screen/Home";
import MyAddress from "./Screen/MyAddress";
import AddAddress from "./Screen/AddAddress";
import ChangePass from "./Screen/ChangePass";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="MyAddress"
          options={{ headerShown: false }}
          component={MyAddress}
        />
        <Stack.Screen
          name="AddAddress"
          options={{ headerShown: false }}
          component={AddAddress}
        />
        <Stack.Screen
          name="ChangePass"
          options={{ headerShown: false }}
          component={ChangePass}
        />
        
        
       

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
