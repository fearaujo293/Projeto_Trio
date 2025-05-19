import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Consoles from '../screens/Consoles';
import ConsoleDetails from '../screens/ConsoleDetails';
import AddConsoleScreen from '../screens/AddConsoleScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Consoles">
        <Stack.Screen 
          name="Consoles" 
          component={Consoles} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ConsoleDetails" 
          component={ConsoleDetails} 
          options={{ 
            title: 'Detalhes do Console',
            headerStyle: { backgroundColor: '#3D1047' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen 
          name="AddConsole" 
          component={AddConsoleScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
