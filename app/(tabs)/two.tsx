import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Icon } from '@rneui/themed';
import { Button, Card } from '@rneui/themed';

const items = [
  { name: 'Faire mes courses', icon: 'shopping-cart' },
  { name: 'Besoin de main d’oeuvre', icon: 'handshake' },
  { name: 'Activité sportive', icon: 'sports-soccer' },
  { name: 'Animaux', icon: 'pets' },
  { name: 'Organisme/association', icon: 'group' },
  { name: 'Autre', icon: 'help' },
  { name: 'Ménage', icon: 'clear'},
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container2}>
      <Button title="Je fais une dmande pour" />
      <View style={styles.container}>
        {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} type="material" color="#00aced" size={24} />
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
            <Icon name="chevron-right" type="material" color="#00aced" size={24} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00aced',
    backgroundColor: '#f8f9fa',
    padding: 10,
    margin: 10,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    margin :5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    marginRight: 10,
  },
  Button : {

    borderRadius : 24,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
});
