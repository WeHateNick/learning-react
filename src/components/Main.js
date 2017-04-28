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
    this.state = {
    	score: 0
    }
    this.incrementScore = () => {
    	this.setState({
    		score: (this.state.score + 1)
    	})
    }
    this.decrementScore = () => {
    	this.setState({
    		score: (this.state.score - 1)
    	})
    }
  }
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<div className="counter-score"> {this.state.score} </div>
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		)
	}
}
Counter.propTypes = {}

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
    			<Counter />
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
		    		return <Player name={player.name} score={player.score} key={player.id} />
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
		score: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired
	})).isRequired
}
AppComponent.defaultProps = {
	title: 'Scoreboard'
};

export default AppComponent;
