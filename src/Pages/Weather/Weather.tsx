import { useFetchWeather } from './hooks/useFetchWeather'
import { WeatherChart } from './WeatherChart'

export const Weather = () => {
  const { chartData, isLoading } = useFetchWeather()

  return (
    <div>
      <h1>Whats the Weather</h1>
      {isLoading && <div>Loading ...</div>}

      {chartData && chartData.length > 0 && (
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-4 shadow-lg sm:p-6">
          <WeatherChart data={chartData} />
        </div>
      )}
    </div>
  )
}
