import React from 'react';
import HelloMessage from './HelloMessage';

//import '../style/hello.css';

var HelloWindow = React.createClass({
	getInitialState: function() {
	    return {
	    	name: "default"
	    };
	},
	getName: function() {
		return {
			name: this.props.name
		};
	},
	componentDidMount: function() {
		var newName = this.getName().name;
		this.setState({
			name: newName
		});
	},
	render: function(){
		var divCss = {
			color: 'green',
			fontSize: 20
		};
		return (
			<div style={divCss} >Window: 
				<HelloMessage name={this.state.name} />
			</div>
		);
	}

});

module.exports = HelloWindow;