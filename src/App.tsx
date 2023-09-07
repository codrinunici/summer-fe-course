import { useEffect, FC } from 'react'
import WeatherBanner from './components/WeatherBanner/WeatherBanner'
import HourlyWeatherCardList from './components/HourlyWeatherCardList/HourlyWeatherCardList.tsx'
// import axios from 'axios'

const App: FC = () => {
	useEffect(() => {
		console.log('kurwa')
	}, [])

	return (
		<>
			<WeatherBanner />
			<HourlyWeatherCardList />
		</>
	)
}

export default App
