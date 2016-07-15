import React from 'react';
import RadioGroup from './RadioGroup.js';

const QuestionField = (props) => {
	let { answer, markAsError, qKey, question, selections } = props;
	let options = selections.map((opt, key) => {
		return (
			<RadioGroup
				key={key}
				isChecked={answer === key}
				label={opt}
				qKey={qKey}
				oKey={key}
				onSelect={props.onSelect} />
		);
	});
	return (
		<li className="quizItem">
			<label className="question"><span className={markAsError ? 'q-num has-error' : 'q-num'}>{qKey + 1}</span><span className="q-text">{question}</span></label>
			<div className="optionList">
			 {options}
			</div>
		</li>
	);
};

QuestionField.PropTypes = {
	answer: React.PropTypes.any,
	markAsError: React.PropTypes.bool,
	qKey: React.PropTypes.number.isRequired,
	question: React.PropTypes.object.isRequired,
	selections: React.PropTypes.array.isRequired,
	onSelect: React.PropTypes.func.isRequired
}
export default QuestionField;