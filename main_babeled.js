'use strict';

var ReactDOM = require('react-dom');

var React = require('react');

var HelloMessage = require('./build/HelloMessage');

var HelloWindow = require('./build/HelloWindow');

ReactDOM.render(React.createElement(HelloWindow, { name: 'KEKE' }), document.getElementById('jsx'));
