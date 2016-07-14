import React from 'react';
import _ from 'lodash';
import QuestionField from './QuestionField.js';


const QuestionForm = (props) => {
	let { qa, questions, renderErrors, unanswered, selections } = props;
	let qList = questions.map((q, key) => {
		let markAsError = unanswered.indexOf(key) > -1  && renderErrors;
		let answer = null;
		if (qa[key]) { answer = qa[key]; }
		return (
			<QuestionField 
				key={key} 
				answer={answer}
				markAsError={markAsError}
				qKey={key}
				question={q}
				selections={selections}
				onSelect={(q, o) => props.onSelect(q, o)} />
		);
	});
	return (
		<form>
			<div>
			{ qList }
			</div>
			<input type="submit" value="Submit" onClick={props.onSubmit} />
		</form>
	);
};

QuestionForm.PropTypes = {
	qa: React.PropTypes.object.isRequired,
	questions: React.PropTypes.array.isRequired,
	renderErrors: React.PropTypes.bool.isRequired,
	selections: React.PropTypes.array.isRequired,
	unanswered: React.PropTypes.array.isRequired,
	onSelect: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};

export default QuestionForm;