import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
// import {PLAYERS} from './components/Main';

var PLAYERS = [
	{
		name: 'Nick Ocampo',
		score: 31
	},
	{
		name: 'Alex Montague',
		score: 28
	}
];

// Render the main component into the dom
ReactDOM.render(<App title="Nick's Scoreboard" players={PLAYERS} />, document.getElementById('app'));
