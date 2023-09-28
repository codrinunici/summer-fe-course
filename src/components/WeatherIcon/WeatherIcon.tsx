import { FC } from 'react'
import { Stormy } from '@/assets/Stormy'
import { Cloudy } from '@/assets/Cloudy'

interface WeatherIconProps {
	weatherCode: number
}

const returnIcon = (weatherCode: number) => {
	switch (weatherCode) {
		case 0: {
			return <Stormy />
		}
		case 1: {
			return <Cloudy />
		}
		default: {
			return <Cloudy />
		}
	}
}

const WeatherIcon: FC<WeatherIconProps> = (props) => {
	return <> {returnIcon(props.weatherCode)} </>
}

export default WeatherIcon
