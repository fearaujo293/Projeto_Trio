import React, { useState } from 'react'; // Importar useState
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';
import ConsoleCard from '../components/ConsoleCard';
import SearchBar from '../components/SearchBar';
import colors from '../styles/colors';

const consolesData = [
  {
    id: '1',
    title: 'PS4',
    brand: 'Sony',
    rating: 4.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/ps4.png'),
  },
  {
    id: '2',
    title: 'Xbox 360',
    brand: 'Microsoft',
    rating: 5.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/xbox 360.png'),
  },
  {
    id: '3',
    title: 'PS Vita',
    brand: 'Sony',
    rating: 4.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/images/psvita.png'),
  },
];

export default function Consoles() {
  const [search, setSearch] = useState(''); // Estado para texto da pesquisa

  // Filtra a lista de consoles conforme o texto digitado
  const filteredData = consolesData.filter(item =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com fundo roxo escuro */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Level Up</Text>
      </View>

      {/* Barra de pesquisa */}
      <SearchBar value={search} onChangeText={setSearch} />

      {/* Título da seção */}
      <Text style={styles.sectionTitle}>Consoles</Text>

      {/* Lista de consoles filtrada */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ConsoleCard item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum console encontrado.</Text>
        }
      />

      {/* Rodapé fixo */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>🎮</Text>
        <Text style={styles.navItem}>❤️</Text>
        <Text style={styles.navItem}>➕</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D1CACA' , 
  },
  header: {
    backgroundColor:'#30052F' , 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  headerTitle: {
    color: '#FFFFFF', 
    fontSize: 36,
    fontWeight: 'bold',
    opacity: 1,
    position: 'relative',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 12,
    marginLeft: 20,
    color: colors.primary,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 62,
    backgroundColor: '#3D1047',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    elevation: 14,
  },
  navItem: {
    color: colors.white,
    fontSize: 28,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 16,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
