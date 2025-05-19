// src/navigation/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import Consoles from '../screens/Consoles';
import ConsoleDetails from '../screens/ConsoleDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Consoles">
      <Stack.Screen 
        name="Consoles" 
        component={Consoles} 
        options={{ 
          headerShown: false 
        }}
      />
      <Stack.Screen 
        name="ConsoleDetails" 
        component={ConsoleDetails} 
        options={{ 
          title: 'Detalhes do Console',
          headerStyle: {
            backgroundColor: '#3D1047',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
