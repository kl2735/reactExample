'use strict';

var React = require('react');
var HelloMessage = require('./HelloMessage');

var HelloWindow = React.createClass({
	displayName: 'HelloWindow',

	getInitialState: function getInitialState() {
		return { name: "default" };
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			'Window:',
			React.createElement(HelloMessage, { name: this.state.name })
		);
	}

});

module.exports = HelloWindow;