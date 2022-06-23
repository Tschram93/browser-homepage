import React from 'react';

const IndividualLinks = (props) => {
	return (
		<a href={props.link} target='_blank' rel='noreferrer'>
			{props.websiteName}
		</a>
	);
};

export default IndividualLinks;
