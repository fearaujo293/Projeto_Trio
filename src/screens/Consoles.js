import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import ConsoleCard from '../components/ConsoleCard';
import BottomNavBar from '../components/BottomNavBar';
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
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState('videogames');
  const [favorites, setFavorites] = useState([]); // IDs dos favoritos

  const navigation = useNavigation(); // Inicializa o hook de navegação

  // Função para alternar favorito
  function toggleFavorite(id) {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  }

  // Função para tratar seleção da aba
  function handleSelectTab(tabKey) {
    if (tabKey === 'add') {
      navigation.navigate('AddConsole'); // Navega para a tela de adicionar console
    } else {
      setSelectedTab(tabKey);
    }
  }

  // Lista filtrada para aba Videogames
  const filteredData = consolesData.filter(item =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  // Lista apenas dos favoritos
  const favoriteData = consolesData.filter(item =>
    favorites.includes(item.id)
  );

  // Decide qual lista mostrar
  let dataToShow = [];
  let sectionTitle = '';
  let showSearch = false;

  if (selectedTab === 'videogames') {
    dataToShow = filteredData;
    sectionTitle = 'Consoles';
    showSearch = true;
  } else if (selectedTab === 'favorites') {
    dataToShow = favoriteData;
    sectionTitle = 'Favoritos';
    showSearch = false;
  } else {
    // Aba "Adicionar" ou outras
    sectionTitle = 'Adicionar';
    dataToShow = [];
    showSearch = false;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Level Up</Text>
      </View>

      {/* Barra de pesquisa só na aba Videogames */}
      {showSearch && <SearchBar value={search} onChangeText={setSearch} />}

      {/* Título da seção */}
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>

      {/* Lista de consoles ou favoritos */}
      {(selectedTab === 'videogames' || selectedTab === 'favorites') && (
        <FlatList
          data={dataToShow}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ConsoleCard
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {selectedTab === 'favorites'
                ? 'Nenhum favorito adicionado.'
                : 'Nenhum console encontrado.'}
            </Text>
          }
        />
      )}

      {/* Barra de navegação inferior */}
      <BottomNavBar selected={selectedTab} onSelect={handleSelectTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D1CACA',
  },
  header: {
    backgroundColor:'#30052F',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
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
  emptyText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 16,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
