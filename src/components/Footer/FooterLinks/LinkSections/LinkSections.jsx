import * as FaIcons from 'react-icons/fa';
import './LinkSections.css';

const LinkSections = (props) => {
	return (
		<ul className='category'>
			<label>{props.categoryName}</label>
			<FaIcons.FaChevronDown className='icon' />
			<FaIcons.FaChevronUp className='icon' />
			<li>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{props.websiteName}
				</a>
			</li>
		</ul>
	);
};

export default LinkSections;
