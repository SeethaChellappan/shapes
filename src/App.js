import { React } from 'react';
import './App.scss';
import Circle from './components/Circle';
import Square from './components/Square';
import Rectangle from './components/Rectangle';
const App = () =>
	<div className="App">
		<Circle/>
		<Square/>
		<Rectangle/>
		<div className="circle"/>
		<div className="square"/>
		<div className="rectangle"/>
	</div>;

export default App;
