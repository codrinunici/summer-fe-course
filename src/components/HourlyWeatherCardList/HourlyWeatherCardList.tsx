import { useEffect } from 'react'
import './HourlyWeatherCardList.css'
import Container from '@mui/material/Container'
import Card from './components/card'

const HourlyWeatherCardList = () => {
	useEffect(() => {}, [])
	const styles = {
		// backgroundColor: 'lightblue',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		padding: '10px',
		overflow: 'auto',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<>
			<Container
				maxWidth="lg"
				style={styles}
			>
				{[0, 1, 2, 3, 4, 5, 6].map((val) => (
					<Card key={val}></Card>
				))}
			</Container>
		</>
	)
}

export default HourlyWeatherCardList
