import { useEffect, useMemo, useState } from 'react'
import type { ChartData, WeatherData } from '../WeatherData'

type FetchWeatherResponse = {
    chartData: ChartData[]
    isLoading: boolean
}

export const useFetchWeather = (): FetchWeatherResponse => {
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const params = new URLSearchParams({
        latitude: '47.6062',
        longitude: '-122.3321',
        hourly: 'temperature_2m,precipitation',
    })
    const url = 'https://api.open-meteo.com/v1/forecast'
    useEffect(() => {
        setIsLoading(true)

        try {
            fetch(`${url}?${params}`)
                .then((res) => res.json())
                .then((data) => setWeather(data))
        } catch (err) {
            console.error(err)
        }

        setIsLoading(false)
    }, [])

    const chartData = useMemo(
        () =>
            weather
                ? weather.hourly.time.map((time, index) => ({
                      time: new Date(time),
                      temperature: weather.hourly.temperature_2m[index],
                  }))
                : [],
        [weather]
    )
    return { chartData, isLoading }
}
