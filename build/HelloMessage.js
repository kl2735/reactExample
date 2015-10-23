'use strict';

var React = require('react');

var HelloMessage = React.createClass({
	displayName: 'HelloMessage',

	render: function render() {
		return React.createElement(
			'div',
			null,
			' Hello, ',
			this.props.name
		);
	}
});

module.exports = HelloMessage;