import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Consoles from '../src/screens/Consoles';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Consoles" component={Consoles} options={{ headerShown: false }} />
        {/* Outras telas depois */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
