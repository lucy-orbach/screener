import React from 'react';
import DrBlurb from './DrBlurb.js';

export default class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state;
		this.state = {
			selectedDr: null,
			msg: '', 
		};
		this.handleToggleMsg = this.handleToggleMsg.bind(this);
		this.handleSelectDr = this.handleSelectDr.bind(this);
		this.handleCancelMsg = this.handleCancelMsg.bind(this);
		this.handleChangeMsg = this.handleChangeMsg.bind(this);
		this.handleSubmitMsg = this.handleSubmitMsg.bind(this);
	}
	handleToggleMsg() {
		this.setState({isActive: !this.state.isActive});
	}
	handleSelectDr(e) {
		e.preventDefault();
		let id = parseInt(e.target.value);
		this.setState({selectedDr: id});
	}
	handleCancelMsg(e) {
		e.preventDefault();
		this.setState({selectedDr: null});
	}
	handleChangeMsg(e) {
		this.setState({msg: e.target.value});
	}
	handleSubmitMsg(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.selectedDr, this.state.msg);
	}
	render() {
		let { city, level, doctors } = this.props;
		let drList = doctors.map((dr, key) => {
			return (
				<DrBlurb
					key={key} 
					dr={dr}
					selectedDr={this.state.selectedDr}
					onClickCancel={this.handleCancelMsg}
					onClickSelectDr={this.handleSelectDr}
					onChangeMsg={this.handleChangeMsg}
					onSubmitMsg={this.handleSubmitMsg} />
				);
		});
		return (
			<section>
				{ level === 'None'
					?	<p key={0} className="resultsIntro">{`Based on the answers you entered, we think you don't have depression. However, it the condition persists, we recommend you to contact a Doctor.`}</p>
					: <p key={1} className="resultsIntro">{`Based on the answers you entered, we think you have a ${level} depression.We recommend you to contact a Doctor.`}</p> 
				}
				{	level === 'Severe'
					? <p key={2} className="alertMsg">If you have thoughts of suicide or harming yourself or others, call your local emergency number (such as 911) right away. Or go to the hospital emergency room. You can also call a suicide hotline 24 hours a day: 1-800-SUICIDE or 1-800-999-9999.</p>
					: null
				}
				<p key={3}>{`These are some Psychiatrists in ${city}:`}</p>
				<ul className="drList">
					{ drList }
				</ul>
			</section>
		);
	}
}

Results.PropTypes = {
	city: React.PropTypes.string.isRequired,
	level: React.PropTypes.string.isRequired,
	doctors: React.PropTypes.object.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};