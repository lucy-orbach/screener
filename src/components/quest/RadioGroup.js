import React from 'react';

const RadioGroup = (props) => {
	let {isChecked, label, qKey, oKey } = props;
	return (
		<label>
			<input type="radio" checked={isChecked} onChange={() => props.onSelect(qKey, oKey)}/>
			{label}
		</label>
	);
};

RadioGroup.PropTypes = {
	isChecked: React.PropTypes.bool.isRequired,
	label: React.PropTypes.string.isRequired,
	qKey: React.PropTypes.number.isRequired,
	oKey: React.PropTypes.number.isRequired,
	onSelect: React.PropTypes.func.isRequired
};

export default RadioGroup;