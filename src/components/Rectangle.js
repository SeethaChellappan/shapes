import { React } from 'react';

const Rectangle = () => {
	const rectangleStyle = {
		height: '200px',
		width: '500px',
		borderRadius: '0%',
		backgroundColor: 'orange',
	};

	return (
		<div style={ rectangleStyle }/>
	);
};

export default Rectangle;
