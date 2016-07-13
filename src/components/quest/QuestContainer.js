import React from 'react';

export default class QuestContainer extends React.Component {
	render() {
		let { questions } = this.props;
		return (
			<section>
				<h2>Questions go here....</h2>
				<h1>{questions[0]}</h1>
			</section>
		);
	}
}

QuestContainer.PropTypes = {
	questions: React.PropTypes.array.isRequired
};