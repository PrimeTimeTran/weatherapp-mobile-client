import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

import ForecastCard from './src/components/ForecastCard'

const url = 'http://127.0.0.1:5000/'

function Forecasts({ data }) {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return <ForecastCard item={item} />
      }}
    />
  )
}

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
          renderItem={({ item: i }) => {
            const {
              location: {
                name,
                region
              },
              forecast: {
                forecastday: forecasts
              }
            } = i
            return <View style={styles.cardContainer}>
              <Text style={styles.location}>{name + ', ' + region}</Text>
              <Forecasts data={forecasts} />
            </View>
          }}
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
  location: {
    fontSize: 20,
    color: 'blue',j
    fontWeight: 'bold',
  },
  cardContainer: {
    height: 250
  },
});
