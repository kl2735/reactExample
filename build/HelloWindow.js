'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HelloMessage = require('./HelloMessage');

var _HelloMessage2 = _interopRequireDefault(_HelloMessage);

//import '../style/hello.css';

var HelloWindow = _react2['default'].createClass({
	displayName: 'HelloWindow',

	getInitialState: function getInitialState() {
		return {
			name: "default"
		};
	},
	getName: function getName() {
		return {
			name: this.props.name
		};
	},
	componentDidMount: function componentDidMount() {
		var newName = this.getName().name;
		this.setState({
			name: newName
		});
	},
	render: function render() {
		var divCss = {
			color: 'green',
			fontSize: 20
		};
		return _react2['default'].createElement(
			'div',
			{ style: divCss },
			'Window:',
			_react2['default'].createElement(_HelloMessage2['default'], { name: this.state.name })
		);
	}

});

module.exports = HelloWindow;