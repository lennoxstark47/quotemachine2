import React from 'react';

const QuoteMachine = (props) => {
	return (
		<>
			{props.selectedQuote
				? `"${props.selectedQuote.quote}" -- ${props.selectedQuote.author}`
				: ''}

			<button onClick={props.handleClick}>
				Next Quote
			</button>
		</>
	);
};

export default QuoteMachine;
