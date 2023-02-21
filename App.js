import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Image, Text, View, FlatList } from 'react-native';

const url = 'http://127.0.0.1:5000/'

function Forecasts({ data }) {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return <View style={styles.forecastCard}>
          <View style={styles.flexOne}>
            <Image
              style={{ height: 25, width: 25 }}
              source={{
                uri: 'http:' + item.day.condition.icon
              }}
            />
            <Text>{item.date.slice(5, 10)}</Text>
          </View>
          <View style={styles.flexOne}>
            <Text>
              {item.day.condition.text}
            </Text>
          </View>

          <View style={{ flex: 2 }}>
            <Text> Max: {item.day.maxtemp_f}</Text>
            <Text> Min: {item.day.mintemp_f}</Text>
            <Text> Average: {item.day.avgtemp_f}</Text>
            <Text> Humidity: {item.day.avghumidity}</Text>
          </View>

        </View>
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
      console.log(json)
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
              <View>
                <Forecasts data={forecasts} />
              </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  flexOne: {
    flex: 1
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  cardContainer: {
    height: 250
  },
  forecastCard: {
    margin: 5,
    width: 100,
    height: 225,
  }
});
