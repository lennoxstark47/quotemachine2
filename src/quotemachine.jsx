import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';

const QuoteMachine = ({
	selectedQuote,
	handleClick,
	selectedColor,
}) => {
	return (
		<Card>
			<CardContent>
				{selectedQuote ? (
					<div
						style={{
							color: selectedColor
								? `${selectedColor.hex}`
								: 'blue',
						}}>
						<div style={{ padding: '30px' }}>
							<Typography variant='h4'>
								{selectedQuote.quote}
								<div
									style={{
										textAlign: 'right',
										fontSize: '15px',
									}}>
									<span>
										-{selectedQuote.author}
									</span>
								</div>
							</Typography>
						</div>
					</div>
				) : null}
			</CardContent>

			<CardActions>
				<button
					className='btn'
					onClick={handleClick}
					style={{
						height: '38px',
						border: 'none',
						borderRadius: '3px',
						backgroundColor: selectedColor
							? `${selectedColor.hex}`
							: null,
						color: 'white',
						outline: 'none',
						fontSize: '0.85em',
						padding: '8px 18px 6px 18px',
						marginTop: '30px',
						cursor: 'pointer',
						fontFamily: 'Raleway',
						fontWeight: '500',
					}}>
					New Quote
				</button>
			</CardActions>
		</Card>
	);
};

export default QuoteMachine;
