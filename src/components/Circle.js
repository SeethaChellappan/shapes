import { React } from 'react';

const Circle = () => {
	const circleStyle = {
		height: '200px',
		width: '200px',
		borderRadius: '50%',
		backgroundColor: 'green',
	};

	return (
		<div style={ circleStyle }/>
	);
};

export default Circle;
