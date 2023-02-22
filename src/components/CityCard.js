import { View, Text, StyleSheet } from 'react-native'

import CityForecasts from './CityForecasts';

export default function CityCard({
  city: {
    location: {
      name,
      region
    },
    forecast: {
      forecastday: forecasts
    }
  }
}) {
  return <View style={styles.cardContainer}>
    <Text style={styles.location}>{name + ', ' + region}</Text>
    <CityForecasts data={forecasts} />
  </View>
}

const styles = StyleSheet.create({
  location: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  cardContainer: {
    height: 250
  },
});



