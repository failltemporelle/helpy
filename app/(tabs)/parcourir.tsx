import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';

interface Mission {
  id: number;
  image: string;
  organization: string;
  title: string;
  date: string;
  rating: number;
  distance: string;
  points: number;
  missions: string;
}

const recommendedMissions: Mission[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    organization: 'Personne âgée',
    title: 'Personne âgée',
    date: 'Disponible le 20 juillet',
    rating: 4.4,
    distance: '245 m',
    points: 10,
    missions: '4 missions'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    organization: 'Jardin co',
    title: 'Jardin co',
    date: 'Disponible',
    rating: 4.4,
    distance: '245 m',
    points: 10,
    missions: '2 missions'
  }
];

const subscriberMissions: Mission[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    organization: 'Animalliance',
    title: 'Refuge animaux',
    date: 'Disponible le 6 juillet',
    rating: 4.5,
    distance: '436 m',
    points: 20,
    missions: '1 mission'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    organization: 'OPAD',
    title: 'Association',
    date: 'Disponible',
    rating: 4.3,
    distance: '436 m',
    points: 20,
    missions: '1 mission'
  }
];

const MissionCard: React.FC<{ mission: Mission }> = ({ mission }) => (
  <View style={styles.card}>
    <Image source={{ uri: mission.image }} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.missionText}>{mission.missions}</Text>
        <TouchableOpacity>
          <Icon name="heart" type="font-awesome" color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.organization}>{mission.organization}</Text>
      <Text style={styles.title}>{mission.title}</Text>
      <Text style={styles.date}>{mission.date}</Text>
      <View style={styles.footer}>
        <View style={styles.rating}>
          <Icon name="star" type="font-awesome" color="blue" size={16} />
          <Text>{mission.rating}</Text>
        </View>
        <Text>{mission.distance}</Text>
        <Text style={styles.points}>{mission.points} pts</Text>
      </View>
    </View>
  </View>
);

const MissionList: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" type="font-awesome" color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Recherche" style={styles.searchInput} />
        <Icon name="filter" type="font-awesome" color="gray" style={styles.filterIcon} />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommandé pour vous</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={recommendedMissions}
        renderItem={({ item }) => <MissionCard mission={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mission de demandeurs abonnés</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={subscriberMissions}
        renderItem={({ item }) => <MissionCard mission={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  filterIcon: {
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    marginRight: 10,
    overflow: 'hidden',
    elevation: 3,
    width: 250,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  missionText: {
    backgroundColor: '#f8d7da',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#721c24',
  },
  organization: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
  },
  date: {
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default MissionList;
