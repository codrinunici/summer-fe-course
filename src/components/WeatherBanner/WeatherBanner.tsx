import { useEffect, FC } from 'react'

import './WeatherBanner.css'

import { Card, CardContent, Typography } from '@mui/material'

const WeatherBanner: FC = () => {
	useEffect(() => {}, [])

	const Wrapper = {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' }
	}

	const WeatherBannerStyles = {}

	return (
		<>
			<Card sx={Wrapper}>
				<CardContent style={WeatherBannerStyles}>
					<Typography variant="h3">San Francisco</Typography>
					<Typography>September 25, 2046</Typography>
					<svg
						style={{
							width: 'auto',
							height: '52px'
						}}
						width="512"
						height="512"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0 1 42.19 53.21a16 16 0 0 0 11.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28Zm19-232.18Zm28.89-26.14a168.8 168.8 0 0 1 34.76 14.71a4 4 0 0 0 5.82-2.44a97 97 0 0 0 3.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 0 0 281 129.33h-.06a3.38 3.38 0 0 0 1 6a162.45 162.45 0 0 1 51.28 26.4a173.92 173.92 0 0 1 45.32 52.51a16 16 0 0 0 9.35 7.44ZM496 224h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32ZM336 96a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16Zm-90.51 37.49a15.92 15.92 0 0 1-11.31-4.69l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1-11.31 27.31Zm181.02 0a16 16 0 0 1-11.31-27.31l22.62-22.63a16 16 0 0 1 22.63 22.63l-22.63 22.62a15.92 15.92 0 0 1-11.31 4.69Z"
						/>
					</svg>
				</CardContent>
				<CardContent style={WeatherBannerStyles}>
					<Typography variant="h3">31℃</Typography>
					<Typography variant="h5">Rain chance: 78%</Typography>
					<Typography>Cloud coverage: 85%</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default WeatherBanner
