require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
    	<div className="scoreboard">
      	<div className="header">
      		<h1>Scoreboard</h1>
      	</div>

		    <div className="players">
		    	<div className="player">
		    		<div className="player-name">
		    			Nick Ocampo
		    		</div>
		    		<div className="player-score">
		    			<div className="counter">
		    				<button className="counter-action decrement"> - </button>
		    				<button className="counter-action increment"> + </button>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		  </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
