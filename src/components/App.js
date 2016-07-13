import React from 'react';
import QuestContainer from './quest/QuestContainer.js';
import ResultsContainer from './results/ResultsContainer.js';


export default class App extends React.Component {
	render() {
		let { questions, scores, doctors } = this.props.data;
		return (
			<div>
				<h1>Hello Again!</h1>
				<QuestContainer questions={questions} />
				<ResultsContainer scores={scores} doctors={doctors} />
			</div>
		);
	}
}

App.PropTypes = {
	data: React.PropTypes.object.isRequierd
};

