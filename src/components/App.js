import React from 'react';
import mockApi from '../api/mockApi.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state;
	}
	componentDidMount() {
		let data = mockApi.getData();
		this.setState({ data:  data });
	}
	render() {
		return (
			<div>
			<h1>Hello World!</h1>
			{ this.state
				? <h1>{this.state.data.questions[0]}</h1>
				: <h1>no data</h1>
			}
			</div>
		);
	}
}

