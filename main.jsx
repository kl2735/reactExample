'use strict';

var ReactDOM = require('react-dom');

var React = require('react');

var HelloMessage = require('./class/HelloMessage');

var HelloWindow = require('./class/HelloWindow');



ReactDOM.render(<HelloWindow name='kliao'></HelloWindow>, document.getElementById('jsx'));
