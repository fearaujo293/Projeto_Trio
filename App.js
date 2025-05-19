
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Navigation from './src/Navigation';
import loadFonts from './src/LoadFonts';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Goldman-Bold': require('./assets/fonts/Goldman-Bold.ttf'),
  //   'Goldman-Regular': require('./assets/fonts/Goldman-Regular.ttf'),
  //   'Geologica-SemiBold': require('./assets/fonts/Geologica-SemiBold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return <Navigation />;
}
