import React from 'react';

const ContactForm = (props) => {
	return (
		<form>
			<textarea
				rows="5"
				maxLength="120"
				placeholder="Would you like to add a message to the Dr?"
				onChange={props.onChange} />
			<input type="submit" value="Submit" onClick={props.onSubmit} />
		</form>
	);
};

ContactForm.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};

export default ContactForm;