import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, style }) => {
return (
<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
<Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
button: {
backgroundColor: '#007AFF',
paddingVertical: 12,
paddingHorizontal: 24,
borderRadius: 8,
},
buttonText: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
});

