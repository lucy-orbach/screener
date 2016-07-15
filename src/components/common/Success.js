import React from 'react';
import { Motion, spring, presets } from 'react-motion';

const Success = (props) => {
	return (
		<Motion
			defaultStyle={{bool: 0}}
			style={{bool: spring(1, presets.gentle)}} >
			{({bool}) =>
			<div className="screen" style={{opacity: `${bool}`}} onClick={props.onClickClose} >
				<div className="successMsg" style={{transform: `scale(${bool}, ${bool})`}}>
			 		<h3 className="successTitle">Your message has been sent!</h3>
			 		<p>Thanks for Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus tempor sem, a tincidunt erat pellentesque.</p>
				</div>
			</div> }
		</Motion>
	);
};

Success.propTypes= {
	onClickClose: React.PropTypes.func.isRequired
};

export default Success;