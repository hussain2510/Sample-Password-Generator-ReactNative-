import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Random from "./Random";
import Manual from "./Manual";
const Stack = createStackNavigator();
export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Random" component={Random} />  
        <Stack.Screen name="Manual" component={Manual} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Random==Sample