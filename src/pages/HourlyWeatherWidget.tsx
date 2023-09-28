import { FC, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import WeatherBanner from '@/components/WeatherBanner/WeatherBanner'
import HourlyWeatherCardList from '@/components/HourlyWeatherCardList/HourlyWeatherCardList.tsx'

type WeatherResponseType = {
	time: string[]
	temperature_2m: number[]
	weathercode: number[]
	precipitation_probability: number[]
	cloudcover: number[]
}

interface HourlyWeatherWidgetProps {
	children: ReactNode
}

const HourlyWeatherWidget: FC<HourlyWeatherWidgetProps> = () => {
	const [cloudCover, setCloudCover] = useState<number[]>([])
	const [precipitationChance, setPrecipitationChance] = useState<number[]>([])
	const [weatherCode, setWeatherCode] = useState<number[]>([])
	const [time, setTime] = useState<string[]>([])
	const [temperature, setTemperature] = useState<number[]>([])

	useEffect(() => {
		const getWeatherInformation = async () => {
			const params = {
				latitude: 52.52,
				longitude: 13.41,
				hourly:
					'temperature_2m,precipitation_probability,weathercode,cloudcover',
				forecast_days: 1
			}

			return axios.get('https://api.open-meteo.com/v1/forecast', { params })
		}

		getWeatherInformation().then((weatherResponse) => {
			if (weatherResponse.data && weatherResponse.data.hourly) {
				const hourlyData: WeatherResponseType = weatherResponse.data.hourly
				setTime(hourlyData.time)
				setTemperature(hourlyData.temperature_2m)
				setWeatherCode(hourlyData.weathercode)
				setPrecipitationChance(hourlyData.precipitation_probability)
				setCloudCover(hourlyData.cloudcover)
			}
		})
	}, [])

	return (
		<>
			<WeatherBanner
				time={time[0]}
				temperature={temperature[0]}
				weatherCode={weatherCode[0]}
				precipitationProbability={precipitationChance[0]}
				cloudCover={cloudCover[0]}
			/>
			<HourlyWeatherCardList
				time={time}
				temperatures={temperature}
				weatherCodes={weatherCode}
			/>
		</>
	)
}

export default HourlyWeatherWidget
