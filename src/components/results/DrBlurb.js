import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import ContactForm from './ContactForm.js';

const DrBlurb = (props) => {
	let { id, name, speciality, picUrl, address, city } = props.dr;
	let isActive = props.selectedDr === id;
	return (
		<li className="drBlurb">
			<div key="0" className="drInfoContainer">
				<div className="avatar" style={{backgroundImage: `url(${picUrl})`}}/>
				<ul className="drInfoList">
					<li key={0} className="drName">{name}</li>
					<li key={1} className="drSpeciality">{speciality}</li>
					<li key={2} className="drAddress">{address}</li>
				</ul>
			</div>
			<div key="1" className="drBtnContainer">
				<button key={0} className="btnLink" onClick={props.onClickCancel}>Cancel</button>
				<button key={1} value={id} onClick={(e) => props.onClickSelectDr(e)}>Contact Dr</button>
			</div>
			<Motion
				style={{
					opacity: spring(( isActive ? 1 : 0), presets.gentle),
					maxH: spring(( isActive ? 300 : 0), presets.gentle),
					y: spring(( isActive ? 0 : 10), presets.gentle)}} >
					{({opacity, maxH, posY}) => 
						<div key="2" className="contactFormContainer" style={{opacity: `${opacity}`, maxHeight: `${maxH}px`, transform: `translateY(-${posY}px`, overflow: 'hidden'}}>
							<ContactForm
								onChange={props.onChangeMsg}
								onSubmit={props.onSubmitMsg} />
						</div> }
				</Motion>
			</li>
	);
};

DrBlurb.propTypes = {
	dr: React.PropTypes.object.isRequired,
	selectedDr: React.PropTypes.number,
	onClickCancel: React.PropTypes.func.isRequired,
	onClickSelectDr: React.PropTypes.func.isRequired,
	onChangeMsg: React.PropTypes.func.isRequired,
	onSubmitMsg: React.PropTypes.func.isRequired
};

export default DrBlurb;