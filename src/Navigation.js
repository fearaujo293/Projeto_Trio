import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

const Navigation = () => {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
<Stack.Screen name="Favorites" component={FavoritesScreen} />
<Stack.Screen name="Create" component={CreateScreen} />
<Stack.Screen name="Edit" component={EditScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};

export default Navigation;
