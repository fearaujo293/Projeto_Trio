import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';

export default function ConsoleCard({ item, isFavorite, onToggleFavorite }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
        <View style={styles.ratingRow}>
          <AntDesign name="star" size={18} color={colors.star} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate('ConsoleDetails', { console: item })}
          >
            <Text style={styles.detailsButtonText}>Detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onToggleFavorite}>
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={28}
              color={isFavorite ? colors.lilac : colors.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 18,
    marginVertical: 12,
    marginHorizontal: 12,
    padding: 14,
    alignItems: 'flex-start',
    elevation: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 14,
    backgroundColor: '#fff',
  },
  info: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 12,
    color: colors.brand,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  rating: {
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 16,
  },
  description: {
    color: colors.white,
    fontSize: 13,
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  detailsButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 18,
  },
  detailsButtonText: {
    color: colors.card,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
