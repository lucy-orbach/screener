import React from 'react';

export default class QuestContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state;
		this.state = {
		qa: {
			q1: {key: 0, score: 4}
		}}; // keep track of answered questions 
		this.handleSelection = this.handleSelection.bind(this);
	}
	handleSelection(questKey, optionKey) {
		let newKey = `q${questKey}`
		let qAnswered = {newKey: { key: questKey, score: optionKey + 1 }};
		// let qa = Object.assign(
		// 	{},
		// 	this.state.qa,
		// 	`q${questKey + 1}`: { key: questKey, score: optionKey + 1 }
		// );
		console.log(qAnswered);
		// this.setState({score: this.state.score += points});
	}
	render() {
		return (
			<section>
				<button onClick={() => this.handleSelection(0, 2)}>click me</button>
				<h2>Please answer all of the questions below...</h2>
				<p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
				<h1>{this.props.questions[0]}</h1>
			</section>
		);
	}
}

QuestContainer.PropTypes = {
	questions: React.PropTypes.array.isRequired,
	onSelect: React.PropTypes.func.isRequired
};