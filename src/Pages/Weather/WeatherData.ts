export type WeatherData = {
    hourly: {
        time: string[]
        temperature_2m: number[]
    }
}

export type ChartData = {
    time: Date
    temperature: number
}
