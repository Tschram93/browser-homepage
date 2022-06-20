import './WelcomeBanner.css';

const WelcomeBanner = (props) => {
	return (
		<header>
			<h1>
                Welcome, {props.name}!
            </h1>
		</header>
	);
};

export default WelcomeBanner;
