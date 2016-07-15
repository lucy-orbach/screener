import React from 'react';
import _ from 'lodash';
import QuestionField from './QuestionField.js';

const QuestionForm = (props) => {
	let { missingQs, qa, questions, renderErrors, unanswered, selections } = props;
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
		<form className="quizForm">
			<ul className="quizList">
			{ qList }
			</ul>
			<div className="errorContainer">
				{ renderErrors
					? <label className="missingLbl">Please answer questions: {missingQs.join(', ')}</label>
					: null
				}
			</div>
			<input type="submit" className="submitQuiz" value="Submit" onClick={props.onSubmit} />
		</form>
	);
};

QuestionForm.PropTypes = {
	missingQs: React.PropTypes.array.isRequired,
	qa: React.PropTypes.object.isRequired, // qKey : oKey = score
	questions: React.PropTypes.array.isRequired,
	renderErrors: React.PropTypes.bool.isRequired,
	selections: React.PropTypes.array.isRequired,
	unanswered: React.PropTypes.array.isRequired, //qKeys
	onSelect: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};

export default QuestionForm;