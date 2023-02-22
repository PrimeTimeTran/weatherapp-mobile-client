import { StyleSheet, Image, Text, View } from 'react-native';

export default function ForecastCard({ item }) {
  const {
    date,
    day: {
      maxtemp_f,
      mintemp_f,
      avgtemp_f,
      avghumidity,
      condition: {
        icon,
        text,
      }
    }
  } = item

  return (
    <View style={styles.forecastCard}>
      <View style={styles.flexOne}>
        <Image
          style={styles.icon}
          source={{ uri: 'http:' + icon }}
        />
        <Text>{date.slice(5, 10)}</Text>
      </View>
      <View style={styles.flexOne}>
        <Text>
          {text}
        </Text>
      </View>
      <View style={styles.body}>
        <Text> Max: {maxtemp_f}</Text>
        <Text> Min: {mintemp_f}</Text>
        <Text> Average: {avgtemp_f}</Text>
        <Text> Humidity: {avghumidity}</Text>
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
