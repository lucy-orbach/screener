import React from 'react';
import _ from 'lodash';
import Introduction from './intro/Introduction.js';
import QuestContainer from './quest/QuestContainer.js';
import ResultsContainer from './results/ResultsContainer.js';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: 'quiz',
			level: null,
			selectedDr: null
		};
		this.handleCurrentSection = this.handleCurrentSection.bind(this);
		this.setDepressionLevel = this.setDepressionLevel.bind(this);
	}
	handleCurrentSection(section) {
		this.setState({ currentSection: section });
	}
	setDepressionLevel(points) {
		let { scores } = this.props.data;
		let level = _.filter(scores, score => { 
			return _.inRange(points, score.min, score.max + 1);
		})[0].level;
		this.setState({level});
	}
	render() {
		let { questions, scores, doctors } = this.props.data;
		let { currentSection } = this.state;
		return (
			<div>
				<h1>Depression Screen</h1>
				{ currentSection === 'intro'
					?	<Introduction onClick={this.handleCurrentSection} />
					: <section>
							<QuestContainer questions={questions} />
							{ currentSection === 'results'
								? <ResultsContainer scores={scores} doctors={doctors} />
								: null
							}
						</section>
				}
			</div>
		);
	}
}

App.PropTypes = {
	data: React.PropTypes.object.isRequierd
};

