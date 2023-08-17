import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const CardComp: FC = () => {
	const card_content = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'auto'
	}
	const card_container = {
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		overflow: 'auto',
		color: '#ffffff',
		background: 'rgba(255,255,255,0.2)'
	}
	const card_content_celsius = {
		fontWeight: '200'
	}
	return (
		<>
			<Card
				sx={{ maxWidth: 100, minWidth: 100 }}
				style={card_container}
			>
				<CardContent
					style={card_content}
					sx={{ flexDirection: 'column' }}
				>
					<Typography variant="body2">11AM</Typography>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="M10.015 4.018c2.465 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763c0 1.525-1.286 2.763-2.872 2.763l-.716-.001l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.853l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.87l-1.487 2.729a.5.5 0 0 1-.596.235l-.082-.036a.5.5 0 0 1-.236-.595l.036-.083l1.225-2.25h-.405c-1.586 0-2.872-1.236-2.872-2.762c0-1.47 1.192-2.671 2.697-2.758l.237-.005c.205-1.913 1.602-3.474 4.066-3.474Z"
						/>
					</svg>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						style={card_content_celsius}
					>
						18,5°
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default CardComp
