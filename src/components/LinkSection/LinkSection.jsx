import IndividualLinks from './IndividualLinks/IndividualLinks';
import './LinkSection.css';

const LinkSection = (props) => {
	return (
		<div className='container'>
			<ul className='category'>
				<label>Animation</label>
				<li>
					<IndividualLinks
						link='https://icons8.com/animated-icons'
						websiteName='Animated Icons'
					/>
				</li>
			</ul>
		</div>
	);
};

export default LinkSection;
