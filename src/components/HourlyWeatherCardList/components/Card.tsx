import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon'
import { CELSIUS_SYMBOL } from '@/config/macros'

const cardContent = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	overflow: 'hidden',
	flexDirection: 'column'
}
const cardContainer = {
	backgroundColor: 'transparent',
	border: 'none',
	boxShadow: 'none',
	overflow: 'auto',
	color: '#ffffff',
	background: 'rgba(255,255,255,0.2)',
	maxWidth: 100,
	minWidth: 100
}
const cardContentCelsius = {
	fontWeight: '200'
}

interface WeatherCardWrapperProps {
	time: string
	temperature: number
	weatherCode: number
}

const WeatherCardWrapper: FC<WeatherCardWrapperProps> = (props) => {
	return (
		<>
			<Card style={cardContainer}>
				<CardContent style={cardContent}>
					<Typography variant="body2">{props.time}</Typography>
					<WeatherIcon weatherCode={props.weatherCode} />
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						style={cardContentCelsius}
					>
						{props.temperature}
						{CELSIUS_SYMBOL}
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default WeatherCardWrapper
