require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="scoreboard">
      	<div className="header">
      		<h1>Hello there</h1>
      	</div>
    	</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
