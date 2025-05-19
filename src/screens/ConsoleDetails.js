import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function ConsoleDetails() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const console = params?.console;

  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating); // arredonda para o inteiro mais próximo
  
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesome 
          key={i} 
          name={i < roundedRating ? "star" : "star-o"} 
          size={16} 
          color="#FFD700" 
        />
      );
    }
  
    
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {stars}
      <Text style={styles.ratingNumber}> {roundedRating}</Text> {/* exibe o valor inteiro */}
      </View>
    );
  };

  if (!console) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Console não encontrado</Text>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={console.image} 
        style={styles.consoleImage}
        resizeMode="contain"
      />
      
      <Text style={styles.consoleTitle}>{console.title}</Text>
      
      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{console.year || '2013'}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.metaText}>{console.brand}</Text>
        <Text style={styles.separator}>|</Text>
        {renderStars(console.rating)}
      </View>
      
      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.description}>{console.description}</Text>
      
      <View style={styles.divider} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        
        <View style={styles.iconButtons}>
        <TouchableOpacity style={[styles.iconButton, styles.editButton]}>
  <FontAwesome name="edit" size={20} color="#fff" />
</TouchableOpacity>

<TouchableOpacity style={[styles.iconButton, styles.deleteButton]}>
  <FontAwesome name="trash" size={20} color="#fff" />
</TouchableOpacity>

        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D1047',
    padding: 24,
    alignItems: 'center',
  },
  consoleImage: {
    width: 140,
    height: 140,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
  },  
  consoleTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  metaText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 8,
    textAlign: 'center',
  },
  separator: {
    color: '#fff',
    marginHorizontal: 8,
  },
  ratingNumber: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 6,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  description: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
    width: '90%',
  },
  divider: {
    height: 1,
    backgroundColor: '#5C0A5D',
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: '#5C0A5D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 20, // Espaço entre o botão e os ícones
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },

  editButton: {
    backgroundColor: '#28A745', // verde
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  deleteButton: {
    backgroundColor: '#DC3545', // vermelho
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});