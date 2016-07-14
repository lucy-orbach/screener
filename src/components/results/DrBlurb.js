import React from 'react';
import ContactForm from './ContactForm.js';

const DrBlurb = (props) => {
	let { isActive } = props; // user wants to make contact
	let { id, name, speciality, picUrl, address, city } = props.dr;
	return (
		<li>
			<div class="drInfoContainer">
				<div class="avatar" />
				<ul class="drInfoList">
					<li key={0} class="drName">{name}</li>
					<li key={1} class="drSpeciality">{speciality}</li>
					<li key={2} class="drAddress">{address}</li>
				</ul>
				<div class="drBtnCotainer">
					<button key={0} onClick={props.onClickCancel}>Cancel</button>
					<button key={1} value={id} onClick={(e) => props.onClickSelectDr(e)}>Contact Dr</button>
				</div>
				<div class="contactFormContainer">
					<ContactForm
						onChange={props.onChangeMsg}
						onSubmit={props.onSubmitMsg} />
				</div>
			</div>
		</li>
	);
};

DrBlurb.propTypes = {
	dr: React.PropTypes.object.isRequired,
	isActive: React.PropTypes.bool.isRequired,
	onClickCancel: React.PropTypes.func.isRequired,
	onClickSelectDr: React.PropTypes.func.isRequired,
	onChangeMsg: React.PropTypes.func.isRequired,
	onSubmitMsg: React.PropTypes.func.isRequired
};

export default DrBlurb;