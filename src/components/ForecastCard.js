import { StyleSheet, Image, Text, View } from 'react-native';

export default function ForecastCard({ item }) {
  return (
    <View style={styles.forecastCard}>
      <View style={styles.flexOne}>
        <Image
          style={styles.icon}
          source={{ uri: 'http:' + item.day.condition.icon }}
        />
        <Text>{item.date.slice(5, 10)}</Text>
      </View>
      <View style={styles.flexOne}>
        <Text>
          {item.day.condition.text}
        </Text>
      </View>
      <View style={styles.body}>
        <Text> Max: {item.day.maxtemp_f}</Text>
        <Text> Min: {item.day.mintemp_f}</Text>
        <Text> Average: {item.day.avgtemp_f}</Text>
        <Text> Humidity: {item.day.avghumidity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  forecastCard: {
    margin: 5,
    width: 100,
    height: 225,
  },
  icon: { height: 25, width: 25 },
  body: { flex: 2 }
});
