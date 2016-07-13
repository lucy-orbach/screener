import React from 'react';

export default class Results extends React.Component {
	render() {
		let { scores, doctors } = this.props;
		return (
			<section>
				<h2>Results go here....</h2>
				<h1>{scores[0].level}</h1>
				<h1>{doctors[0].name}</h1>
			</section>
		);
	}
}

Results.PropTypes = {
	scores: React.PropTypes.array.isRequired,
	doctors: React.PropTypes.array.isRequired
};