import { FC } from 'react'
import './WeatherBanner.css'
import { Cloudy } from '../../assets/Cloudy'
import { Card, CardContent, Typography } from '@mui/material'

const WeatherBanner: FC = () => {
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
					<Typography>September 25, 2046</Typography>
					<Cloudy />
				</CardContent>
				<CardContent>
					<Typography variant="h3">31℃</Typography>
					<Typography variant="h5">Rain chance: 78%</Typography>
					<Typography>Cloud coverage: 85%</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default WeatherBanner
