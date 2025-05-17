import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import List from '../components/List';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const FavoritesScreen = () => {
const [favorites, setFavorites] = useState([
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
]);

const renderItem = ({ item }) => (
<View style={styles.itemContainer}>
<Text style={styles.itemText}>{item.name}</Text>
</View>
);

const keyExtractor = (item) => item.id.toString();

return (
<View style={styles.container}>
<Text style={styles.title}>Favorites</Text>
<List
     data={favorites}
     renderItem={renderItem}
     keyExtractor={keyExtractor}
     style={styles.list}
   />
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: colors.white,
},
title: {
fontSize: 24,
fontFamily: fonts.bold,
padding: 16,
},
list: {
flex: 1,
},
itemContainer: {
padding: 16,
backgroundColor: colors.inputBackground,
borderRadius: 8,
marginHorizontal: 16,
marginVertical: 8,
},
itemText: {
fontSize: 16,
fontFamily: fonts.regular,
},
});

export default FavoritesScreen;