import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'

import CityCard from './src/components/CityCard'

const url = 'http://127.0.0.1:5000/'

export default function App() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    async function fetchForecasts() {
      const r = await fetch(url)
      const json = await r.json()
      setCities(json)
    }
    fetchForecasts()
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <StatusBar style="auto" />
        <Text>14 day forecasts</Text>
        <FlatList
          data={cities}
          renderItem={({ item }) => <CityCard city={item} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
