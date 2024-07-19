import { React } from 'react';

const Square = () => {
	const squareStyle = {
		height: '200px',
		width: '200px',
		borderRadius: '1%',
		backgroundColor: 'pink',
	};

	return (
		<div style={ squareStyle }/>
	);
};

export default Square;
