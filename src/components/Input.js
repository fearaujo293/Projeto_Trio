import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Input = ({ value, onChangeText, placeholder, style }) => {
return (
<TextInput
value={value}
onChangeText={onChangeText}
placeholder={placeholder}
style={[styles.input, style]}
placeholderTextColor={colors.gray}
selectionColor={colors.primary}
cursorColor={colors.primary}
fontFamily={fonts.regular}
/>
);
};

const styles = StyleSheet.create({
input: {
height: 48,
paddingHorizontal: 16,
backgroundColor: colors.inputBackground,
borderRadius: 8,
fontSize: 16,
},
});

export default Input;
