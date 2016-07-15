import React from 'react';
import _ from 'lodash';
import QuizForm from './QuizForm.js';

export default class QuestContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state;
		this.state = {
			qa: this.props.qa, //tracks answered questions: question index: selection index(=score)
			unanswered: [] //keeps index of unanswered Qs
		};
		this.handleSelection = this.handleSelection.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.calculateScore = this.calculateScore.bind(this);
	}
	// Receives question and option Index (oKey = index = score)
	handleSelection(qKey, oKey) { 
		// Clones qa and adds/edits current question
		let qAnswered = {};
		qAnswered[qKey] = oKey;
		let newQa = Object.assign({}, this.state.qa, qAnswered);
		// Removes answered question from unanswered list
			let unanswered = Object.assign([], this.state.unanswered); // clones state
		if (unanswered.length > 0) {
			_.pull(unanswered, qKey);
		}
		// Sets state...
		this.setState({qa: newQa, unanswered: unanswered});
	}
	handleSubmit(e) {
		e.preventDefault();
		let  { qa } = this.state; //for reference only
		let unanswered = Object.assign([], this.state.unanswered); // clones state
		// Verifies that all the questions have been answered..
		_.forEach(this.state.qa, (value, key) => {
			//convert key to integer
			let num = parseInt(key);
			//push to unanswered array...
  		if (value === null && unanswered.indexOf(num) === -1) {
  			unanswered.push(num);
  		}
		});
		this.setState({ unanswered });
		//if all questions are answered -> proceed...
		if (unanswered.length === 0) {
			this.calculateScore();
		}
	}
	calculateScore() {
		let { qa } = this.state; //for reference
		let score = 0;
		for (let i in qa) {
			score += qa[i];
		};
		this.props.onSubmitForm(score);
	}
	render() {
		let { qa, unanswered } = this.state;
		let renderErrors = unanswered.length > 0;
		// Creates array of qNumbers from indexes
		let missingQs = unanswered.map( num => {
			return num + 1;
		});
		return (
			<section>
				<h2>Please answer all of the questions below...</h2>
				<p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
				<QuizForm
					missingQs={missingQs}
					qa={qa}
					questions={this.props.questions}
					renderErrors={renderErrors}
					selections={this.props.selections}
					unanswered={unanswered}
					onSelect={(qKey, oKey) => this.handleSelection(qKey, oKey)}
					onSubmit={this.handleSubmit} />
			</section>
		);
	}
}

QuestContainer.PropTypes = {
	questions: React.PropTypes.array.isRequired,
	selections: React.PropTypes.array.isRequired,
	onSelect: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};