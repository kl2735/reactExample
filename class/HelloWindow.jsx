var React = require('react');
var HelloMessage = require('./HelloMessage');

var HelloWindow = React.createClass({
	getInitialState: function() {
	    return {name: "default"};
	},
	render: function(){
		return (
			<div>Window: 
				<HelloMessage name={this.state.name} />
			</div>
		);
	}

});

module.exports = HelloWindow;