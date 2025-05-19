import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const TABS = [
  {
    key: 'videogames',
    label: 'Videogames',
    icon: (color) => <MaterialIcons name="videogame-asset" size={28} color={color} />,
  },
  {
    key: 'favorites',
    label: 'Favoritos',
    icon: (color) => <AntDesign name="heart" size={28} color={color} />,
  },
  {
    key: 'add',
    label: 'Adicionar',
    icon: (color) => <AntDesign name="pluscircle" size={28} color={color} />,
  },
];

const ACTIVE_COLOR = '#B77EFF'; // Azul/Roxo escuro para selecionado
const INACTIVE_COLOR = '#A2A2A2'; // Cinza para não selecionado
const BAR_BG = '#30052F'; // Fundo da barra

export default function BottomNavBar({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = selected === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.item, isActive && styles.activeItem]}
            activeOpacity={0.6}
            onPress={() => onSelect(tab.key)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={tab.label}
          >
            {tab.icon(isActive ? ACTIVE_COLOR : INACTIVE_COLOR)}
            <Text style={[styles.label, { color: isActive ? ACTIVE_COLOR : INACTIVE_COLOR }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: BAR_BG,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: 62,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 14,
    zIndex: 10,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 6,
  },
  activeItem: {
    // Se quiser algum estilo extra para o item ativo, pode colocar aqui
  },
  label: {
    fontSize: 13,
    marginTop: 2,
    fontWeight: 'bold',
  },
});
