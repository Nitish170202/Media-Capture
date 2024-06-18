import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      {/* </Stack.Navigator> */} */
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});