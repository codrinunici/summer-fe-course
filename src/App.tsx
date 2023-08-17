import { useEffect, FC } from 'react'
import './App.css'
import WeatherBanner from './components/WeatherBanner/WeatherBanner'

const App: FC = () => {
	useEffect(() => {
		console.log('kurwa')
	}, [])

	return (
		<>
			<WeatherBanner></WeatherBanner>
		</>
	)
}

export default App
