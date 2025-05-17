import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const List = ({ data, renderItem, keyExtractor, style }) => {
return (
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={keyExtractor}
style={[styles.list, style]}
contentContainerStyle={styles.listContainer}
showsVerticalScrollIndicator={false}
/>
);
};

const styles = StyleSheet.create({
list: {
flex: 1,
},
listContainer: {
paddingVertical: 16,
},
});

export default List;