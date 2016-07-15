import React from 'react';

const Introduction = (props) => {
	return (
		<section className="introSection">
			<h2>Hi {props.user.firstName}!</h2>
			<h2>Are you feeling overwhelming sadness?</h2>
			<p>Taking a screening is one of the quickest and easiest ways to determine whether you are sad or experiencing symptoms of depression. The Depression Screen can help you understand more about your mental health and get the help you need in 3 easy steps:</p>
			<ul className="stepList">
				<li className="step quiz">Take 10 questions survey</li>
				<li className="step results">Review Results &amp;doctors</li>
				<li className="step contact">Contact Doctor</li>
			</ul>
			<button onClick={() => props.onClick('quiz')}>Start</button>
		</section>
	);
};


Introduction.PropTypes = {
	user: React.PropTypes.object,
	onClick: React.PropTypes.func.isRequired
};

export default Introduction;