import { FlatList } from 'react-native'
import ForecastCard from './ForecastCard'

export default function Forecasts({ data }) {
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
