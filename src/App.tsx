import { useEffect, FC } from 'react'
import './App.css'
import WeatherBanner from './components/WeatherBanner/WeatherBanner'
import HourlyWeatherCardList from './components/HourlyWeatherCardList/HourlyWeatherCardList.tsx'

const App: FC = () => {
	useEffect(() => {
		console.log('kurwa')
	}, [])

	return (
		<>
			<HourlyWeatherCardList />
			<WeatherBanner></WeatherBanner>

		</>
	)
}

export default App
