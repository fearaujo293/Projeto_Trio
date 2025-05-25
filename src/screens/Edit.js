import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const EditScreen = ({ route }) => {
const { item } = route.params;
const [name, setName] = useState(item.name);
const [description, setDescription] = useState(item.description);

const handleUpdate = () => {
console.log('Updating item:', { name, description });
};

return (
<View style={styles.container}>
<Text style={styles.title}>Edit Item</Text>
<Input
     value={name}
     onChangeText={setName}
     placeholder="Name"
     style={styles.input}
   />
<Input
     value={description}
     onChangeText={setDescription}
     placeholder="Description"
     style={styles.input}
   />
<Button title="Update" onPress={handleUpdate} style={styles.button} />
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
input: {
marginVertical: 8,
},
button: {
marginTop: 16,
},
});

export default EditScreen;
