import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Stormy } from '../../../assets/Stormy'

const CardComp: FC = () => {
	const cardContent = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'auto',
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
	return (
		<>
			<Card style={cardContainer}>
				<CardContent style={cardContent}>
					<Typography variant="body2">11AM</Typography>
					<Stormy />
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						style={cardContentCelsius}
					>
						18,5°
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default CardComp
