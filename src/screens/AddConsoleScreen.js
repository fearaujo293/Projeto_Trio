import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddConsoleScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  function renderStars() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <AntDesign
            name={i <= rating ? "star" : "staro"}
            size={32}
            color="#fff"
            style={{ marginHorizontal: 2 }}
          />
        </TouchableOpacity>
      );
    }
    return <View style={{ flexDirection: 'row', marginBottom: 18 }}>{stars}</View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Coloque o Nome do Console"
        placeholderTextColor="#C6C6C6"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Coloque o Nome do Console"
        placeholderTextColor="#C6C6C6"
        value={brand}
        onChangeText={setBrand}
      />

      <Text style={styles.label}>Ano</Text>
      <TextInput
        style={styles.input}
        placeholder="Coloque o Ano"
        placeholderTextColor="#C6C6C6"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, { height: 50 }]}
        placeholder="Coloque a Descrição"
        placeholderTextColor="#C6C6C6"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Avaliação</Text>
      {renderStars()}

      <Text style={styles.label}>Imagem</Text>
      <TouchableOpacity style={styles.attachButton}>
        <Text style={styles.attachButtonText}>Anexar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D0033',
    borderRadius: 16,
    margin: 10,
    padding: 18,
    flex: 1,
    justifyContent: 'flex-start',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#2D0033',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 15,
    marginBottom: 6,
  },
  attachButton: {
    backgroundColor: '#7B2FF2',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  attachButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#7B2FF2',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButton: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 6,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
