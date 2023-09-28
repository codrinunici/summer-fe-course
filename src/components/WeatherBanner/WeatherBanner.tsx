import { FC } from 'react'
import { Card, Typography, CardContent } from '@mui/material'
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon'
import { CELSIUS_SYMBOL } from '@/config/macros'

interface WeatherBannerProps {
	time: string
	temperature: number
	weatherCode: number
	precipitationProbability: number
	cloudCover: number
}

const WeatherBanner: FC<WeatherBannerProps> = (props) => {
	const weatherBannerStyles = {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' }
	}
	return (
		<>
			<Card sx={weatherBannerStyles}>
				<CardContent>
					<Typography variant="h3">San Francisco</Typography>
					<Typography>{props.time}</Typography>
					<WeatherIcon weatherCode={props.weatherCode} />
				</CardContent>
				<CardContent>
					<Typography variant="h3">
						{props.temperature}
						{CELSIUS_SYMBOL}
					</Typography>
					<Typography variant="h5">
						Rain chance: {props.precipitationProbability}
					</Typography>
					<Typography>Cloud coverage:{props.cloudCover}%</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default WeatherBanner
