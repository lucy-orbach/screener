import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Introduction from './common/Introduction.js';
import Success from './common/Success.js';
import QuestContainer from './quest/QuestContainer.js';
import ResultsContainer from './results/ResultsContainer.js';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: 'start', //'start', 'quiz', results'
			filteredDrs: [], // array of objects
			level: 'mild',
			success: false, //string
			mobile: false
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleCurrentSection = this.handleCurrentSection.bind(this);
		this.handleSubmitDr = this.handleSubmitDr.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.getMedia = this.getMedia.bind(this);
		this.setDepressionLevel = this.setDepressionLevel.bind(this);
		this.filterDoctors = this.filterDoctors.bind(this);
	}
	componentDidMount() {
		this.getMedia();
		window.addEventListener('resize', this.getMedia);
	}
	handleCurrentSection(section) {
		this.setState({ currentSection: section });
		ReactDOM.findDOMNode(this.refs.pageTop).scrollTo = 0
	}
	handleSubmitDr(drId, msg) {
		// Dispatches to server
		// this.props.actions.sendMsg( this.props.user, drId, 'Sent', msg);
		//mocks receipt of success props 
		ReactDOM.findDOMNode(this.refs.pageTop).scrollTo = 0;
		this.setState({
			currentSection: 'start',
			success: true});
	}
	handleCloseModal() {
		this.setState({success: false, currentSection: 'start'});
	}
	getMedia() {
		// mobile & ipad portrait
		let mobile = window.matchMedia(`(max-width: 799px)`).matches;
		this.setState({ mobile });
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
		// Displays 4 Drs on desktop & 3 on mobile
		let qty = this.state.mobile ? 3 : 4;
		let filteredDoctors = _.filter(doctors, dr => {  
			return ( 
				dr.speciality ==='Psychiatrist' && dr.city === 'New York, NY'
			);
		});
		this.setState({filteredDrs: filteredDoctors.slice(0, qty)});
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
			<div ref="pageTop" className="container">
				<h1 className="appTitle">Depression Screen</h1>
				<main className="main">
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
            	mobile={this.state.mobile}
							city={user.city}
							level={level}
							doctors={filteredDrs}
							onSubmit={this.handleSubmitDr} />
          }
				</main>
				{ this.state.success &&
            <Success onClickClose={this.handleCloseModal}/>
          }
			</div>
		);
	}
}

App.PropTypes = {
	data: React.PropTypes.object.isRequierd
};

