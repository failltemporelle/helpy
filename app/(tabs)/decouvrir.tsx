import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';

const missions = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    organization: 'OPAD',
    title: 'Association',
    date: 'Disponible du 20 - 21 juillet',
    rating: 4.4,
    distance: '245 m',
    points: 10,
    missions: '4 mission'
  },
  {
    id: 2,
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
    id: 3,
    image: 'https://via.placeholder.com/150',
    organization: 'Course',
    title: 'Aide animaux',
    date: 'Disponible le 7 juillet',
    rating: 4.5,
    distance: '436 m',
    points: 20,
    missions: '1 mission'
  }
];

export default function MissionList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {missions.map((mission) => (
        <View key={mission.id} style={styles.card}>
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
                <Icon name="star" type="font-awesome" color="red" size={16} />
                <Text>{mission.rating}</Text>
              </View>
              <Text>{mission.distance}</Text>
              <Text style={styles.points}>{mission.points} pts</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    overflow: 'hidden',
    elevation: 3,
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
    color: 'red',
    fontWeight: 'bold',
  },
});
