import LinkSections from './LinkSections/LinkSections';
import * as FaIcons from 'react-icons/fa';
import './FooterLinks.css';

const FooterLinks = (props) => {
	return (
		<div>
			<h3>Quick Links</h3>
			<div className='container'>
				<span className='category-title'>Web Dev Resources</span>
				<LinkSections
				categoryName='Animation'
				link='https://icons8.com/animated-icons' 
				websiteName='Animated Icons'>
				</LinkSections>
			</div>
		</div>
	);
};

export default FooterLinks;
