require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<div className="header">
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}
Header.propTypes = {
	title: PropTypes.string.isRequired
}

class Counter extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<div className="counter-score"> {this.props.score} </div>
				<button className="counter-action increment"> + </button>
			</div>
		)
	}
}
Counter.propTypes = {
	score: PropTypes.number.isRequired
}
Counter.defaultProps = {
	score: 0
};

class Player extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<div className="player">
    		<div className="player-name">
    			{this.props.name}
    		</div>
    		<div className="player-score">
    			<Counter score={this.props.score} />
    		</div>
    	</div>
		)
	}
}
Player.propTypes = {
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
}
Player.defaultProps = {
	// name: 'Player 1',
	score: 0
};

class AppComponent extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="scoreboard">
    		<Header title={this.props.title} />
		    <div className="players">
		    	{this.props.players.map(function (player) {
		    		return <Player name={player.name} score={player.score} />
		    	})}
		    </div>
		  </div>
    );
  }
}
AppComponent.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired
	})).isRequired
}
AppComponent.defaultProps = {
	title: 'Scoreboard'
};

export default AppComponent;
