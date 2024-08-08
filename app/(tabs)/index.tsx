import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Button, Card } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react'
import { imagesDataURL } from '../../constants/data' 

const profil = () => {
  const [selectedImage] = useState(imagesDataURL[0])
  const handleImageSelection = ()=>{
    
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 22
    }}>
      <View style={{
        marginHorizontal: 12,
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
          />

        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{
          alignItems: 'center',
          marginVertical: 22
        }}>
          <TouchableOpacity
            onPress={handleImageSelection}
          >
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2
              }}
            />

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  card: {
    borderRadius: 10,  // Ajustez cette valeur pour obtenir l'arrondi souhaité
  },
});

export default profil