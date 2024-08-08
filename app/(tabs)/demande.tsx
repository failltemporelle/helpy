import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from '@rneui/themed';

const categories = [
  { name: 'Faire mes courses', icon: 'shopping-cart' },
  { name: 'Besoin de main d’oeuvre', icon: 'handshake' },
  { name: 'Activité sportive', icon: 'sports-soccer' },
  { name: 'Animaux', icon: 'pets' },
  { name: 'Organisme/association', icon: 'group' },
  { name: 'Autre', icon: 'help' },
];

const RequestPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Faire une demande</Text>
        <TouchableOpacity>
          <Icon name="add" type="material" color="black" />
        </TouchableOpacity>
      </View>
      <Button title="Je fais une demande pour" buttonStyle={styles.mainButton} />
      <View style={styles.card}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.iconContainer}>
              <Icon name={category.icon} type="material" color="#00aced" size={24} />
            </View>
            <Text style={styles.itemText}>{category.name}</Text>
            <Icon name="chevron-right" type="material" color="#00aced" size={24} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '100%',
    padding: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
});

export default RequestPage;
