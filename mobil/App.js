/*
* File: App.java
* Author: Zsiga Gergely
* Copyright: 2024, Zsiga Gergely
* Group: Szoft/II/1/E
* Date: 2024-04-07
* Github: https://github.com/zsi-ga/dolgozat_4.git
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './services/tanulokService';
import { useEffect, useState } from 'react';

export default function App() {

  const [students, beallitTanulok] = useState([]);
  
  useEffect(() =>{
    lekerTanulok().then(data => {
      console.log(data)
      beallitTanulok(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tanulók:</Text>

      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.items}>   

            <Text>Név: {item.name}</Text>
            <Text>Város: {item.city}</Text>
            <Text>Születési dátum: {item.birth}</Text>            
          </View>
        )}

      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    border: 'solid 2px black',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'silver',
  }, 
  header: {
    fontSize: '20px',
  },
});