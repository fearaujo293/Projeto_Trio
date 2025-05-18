import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Home = () => {
const navigation = useNavigation();

const handleNavigateToDetails = () => {
navigation.navigate('Details');
};

return (
<View style={styles.container}>
<Text style={styles.title}>Welcome to the App!</Text>
<Button
     title="Go to Details"
     onPress={handleNavigateToDetails}
     style={styles.button}
   />
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: colors.white,
},
title: {
fontSize: 24,
fontFamily: fonts.bold,
marginBottom: 24,
},
button: {
marginTop: 16,
},
});

export default Home;