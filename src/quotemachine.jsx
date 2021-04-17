import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/';
// import { faQuoteLeft } from '@fortawesome/fontawesome-free/svgs/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
							transition: 'color 1s ease',
						}}>
						<div style={{ padding: '30px' }}>
							<Typography variant='h4'>
								<FontAwesomeIcon
									icon={faQuoteLeft}
									size='md'></FontAwesomeIcon>
								{selectedQuote.quote}
								<div
									style={{
										textAlign: 'right',
										fontSize: '20px',
									}}>
									<span
										style={{
											fontFamily: 'Raleway',
											fontWeight: '500',
										}}>
										-{selectedQuote.author}
									</span>
								</div>
							</Typography>
						</div>
					</div>
				) : null}
			</CardContent>
			<div style={{ float: 'right' }}>
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
							transition:
								'background-color 1s ease',
						}}>
						New Quote
					</button>
				</CardActions>
			</div>
		</Card>
	);
};

export default QuoteMachine;
