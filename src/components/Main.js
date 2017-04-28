require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {
	
	constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="scoreboard">
      	<div className="header">
      		<h1>{this.props.title}</h1>
      	</div>

		    <div className="players">
		    	<div className="player">
		    		<div className="player-name">
		    			Nick Ocampo
		    		</div>
		    		<div className="player-score">
		    			<div className="counter">
		    				<button className="counter-action decrement"> - </button>
		    				<div className="counter-score"> 31 </div>
		    				<button className="counter-action increment"> + </button>
		    			</div>
		    		</div>
		    	</div>
		    </div>

		    <div className="players">
		    	<div className="player">
		    		<div className="player-name">
		    			Alex Montague
		    		</div>
		    		<div className="player-score">
		    			<div className="counter">
		    				<button className="counter-action decrement"> - </button>
		    				<div className="counter-score"> 31 </div>
		    				<button className="counter-action increment"> + </button>
		    			</div>
		    		</div>
		    	</div>
		    </div>

		  </div>
    );
  }
}

AppComponent.propTypes = {
	title: PropTypes.string.isRequired
}

AppComponent.defaultProps = {
	title: 'Scoreboard'
};

export default AppComponent;
