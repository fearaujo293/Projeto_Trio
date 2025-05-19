import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';

export default function SearchBar({ value, onChangeText }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={22} color={colors.white} />
      <TextInput
        style={styles.input}
        placeholder={isFocused ? '' : 'Pesquisar console...'}
        placeholderTextColor={colors.white}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 10,
    margin: 18,
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 42,
  },
  input: {
    flex: 1,
    color: colors.white,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
