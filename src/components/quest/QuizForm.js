import React from 'react';
import _ from 'lodash';
import QuestionField from './QuestionField.js';

const QuestionForm = (props) => {
	let { qa, questions, renderErrors, unanswered, selections } = props;
	let qList = questions.map((q, qKey) => {
		let markAsError = unanswered.indexOf(qKey) !== -1  && renderErrors;
		let answer = null;
		if (qa[qKey] !== null) { answer = qa[qKey]; }
		return (
			<QuestionField 
				key={qKey} 
				answer={answer}
				markAsError={markAsError}
				qKey={qKey}
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
	qa: React.PropTypes.object.isRequired, // qKey : oKey = score
	questions: React.PropTypes.array.isRequired,
	renderErrors: React.PropTypes.bool.isRequired,
	selections: React.PropTypes.array.isRequired,
	unanswered: React.PropTypes.array.isRequired, //qKeys
	onSelect: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};

export default QuestionForm;