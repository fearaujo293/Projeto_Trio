
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const DetailsScreen = () => {
const navigation = useNavigation();

const handleNavigateBack = () => {
navigation.goBack();
};

return (
<View style={styles.container}>
<Text style={styles.title}>Details Screen</Text>
<Text style={styles.description}>
This is the details screen of the application.
</Text>
<Button
     title="Go Back"
     onPress={handleNavigateBack}
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
marginBottom: 16,
},
description: {
fontSize: 16,
fontFamily: fonts.regular,
textAlign: 'center',
marginHorizontal: 24,
marginBottom: 24,
},
button: {
marginTop: 16,
},
});

export default DetailsScreen;