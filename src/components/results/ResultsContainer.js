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
			let isActive = this.state.selectedDr === dr.id;
			return (
				<DrBlurb
					key={key} 
					dr={dr}
					isActive={isActive}
					onClickCancel={this.handleToggleMsg}
					onClickSelectDr={this.handleSelectDr}
					onChangeMsg={this.handleChangeMsg}
					onSubmitMsg={this.handleSubmitMsg} />
				);
		});
		return (
			<section>
				<p>{`Based on the answers you entered, we think you have a ${level} depression. We recommend you to contact a Doctor.`}</p>
				<p>{`These are some Psychiatrists in ${city}:`}</p>
				<ul>
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
	selectedDr: React.PropTypes.number.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};