import React from 'react';

const Introduction = (props) => {
	return (
		<div>
			<h2>Hi {props.user.firstName}!</h2>
			<h2>Are you feeling overwhelming sadness?</h2>
			<p>Taking a screening is one of the quickest and easiest ways to determine whether you are sad or experiencing symptoms of depression. The Depression Screen can help you understand more about your mental health and get the help you need in 3 easy steps:</p>
			<ul>
				<li>Take 10 questions survey</li>
				<li>Review Results and browse doctors</li>
				<li>Contact Doctor</li>
			</ul>
			<button onClick={() => props.onClick('quiz')}>Start</button>
		</div>
	);
};


Introduction.PropTypes = {
	user: React.PropTypes.object,
	onClick: React.PropTypes.func.isRequired
};

export default Introduction;