import React from 'react';
import _ from 'lodash';
import Introduction from './common/Introduction.js';
import QuestContainer from './quest/QuestContainer.js';
import ResultsContainer from './results/ResultsContainer.js';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: 'start', //'start', 'quiz', results', 'thanks'
			filteredDrs: [], // array of objects
			level: null //string
		};
		this.handleCurrentSection = this.handleCurrentSection.bind(this);
		this.handleSubmitDr = this.handleSubmitDr.bind(this);
		this.setDepressionLevel = this.setDepressionLevel.bind(this);
		this.filterDoctors = this.filterDoctors.bind(this);
	}
	handleCurrentSection(section) {
		this.setState({ currentSection: section });
	}
	handleSubmitDr(drId, msg) {
		console.log(`you got a message: ${msg}`);
		// Dispatches to server
		// this.props.actions.sendMsg( this.props.user, drId, 'Sent', msg);
		this.handleCurrentSection('thanks');
	}
	setDepressionLevel(score) {
		let { levels } = this.props.data;
		let level = _.filter(levels, lvl => { 
			return _.inRange(score, lvl.min, lvl.max + 1);
		})[0];
		this.setState({ level: level.level });
		this.filterDoctors();
	}
	filterDoctors() {
		let city = this.props.user;
		let { doctors } = this.props.data;
		let filteredDoctors = _.filter(doctors, dr => {  
			return ( 
				dr.speciality ==='Psychiatrist' && dr.city === 'New York, NY'
			);
		});
		this.setState({filteredDrs: filteredDoctors.slice(0, 3)});
		this.handleCurrentSection('results');
	}
	render() {
		let { doctors, levels, questions, selections } = this.props.data;
		let { user } = this.props;
		let { currentSection, filteredDrs, level } = this.state;
		// creates obj to track questions...
		let qa = {}; 
		let qaKeys = Object.keys(questions);
		for (let key in qaKeys) {
			qa[key] = null;
		}
		return (
			<div>
				<h1>Depression Screen</h1>
					<section>
						{ currentSection === 'start' &&
	              <Introduction
	              	user={user}
	              	onClick={this.handleCurrentSection} />
	          }
	          { currentSection === 'quiz' &&
	              <QuestContainer
									qa={qa}
									questions={questions}
									selections={selections}
									onSubmitForm={this.setDepressionLevel} />
	          }
	          { currentSection === 'results' &&
	              <ResultsContainer
									city={user.city}
									level={level}
									doctors={filteredDrs}
									onSubmit={this.handleSubmitDr} />
	          }
	          { currentSection === 'thanks' &&
	              <div>

	              </div>
	          }
				</section>
			</div>
		);
	}
}

App.PropTypes = {
	data: React.PropTypes.object.isRequierd
};

