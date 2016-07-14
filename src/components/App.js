import React from 'react';
import _ from 'lodash';
import Introduction from './intro/Introduction.js';
import QuestContainer from './quest/QuestContainer.js';
import ResultsContainer from './results/ResultsContainer.js';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: 'results',
			level: 'nonlvl',
			selectedDr: null
		};
		this.handleCurrentSection = this.handleCurrentSection.bind(this);
		this.setDepressionLevel = this.setDepressionLevel.bind(this);
	}
	handleCurrentSection(section) {
		this.setState({ currentSection: section });
	}
	setDepressionLevel(score) {
		let { levels } = this.props.data;
		let level = _.filter(levels, lvl => { 
			return _.inRange(score, lvl.min, lvl.max + 1);
		})[0];
		this.setState({
			currentSection: 'results',
			level: level.level
		});
	}
	render() {
		let { questions, selections, levels, doctors } = this.props.data;
		let { currentSection, level } = this.state;
		// creates obj to track questions...
		let qa = {}; 
		let qaKeys = Object.keys(questions);
		for (let key in qaKeys) {
			qa[key] = null;
		}
		return (
			<div>
				<h1>Depression Screen</h1>
				{ currentSection === 'intro'
					?	<Introduction onClick={this.handleCurrentSection} />
					: <section>
							<QuestContainer
								qa={qa}
								questions={questions}
								selections={selections}
								onSubmitForm={this.setDepressionLevel}/>
							{ currentSection === 'results'
								? <ResultsContainer level={level} doctors={doctors} />
								: null
							}
						</section>
				}
				<h1>{level}</h1>
			</div>
		);
	}
}

App.PropTypes = {
	data: React.PropTypes.object.isRequierd
};

