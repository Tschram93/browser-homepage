import { useEffect, useRef, useState } from 'react';
import './Clock.css';

const Clock = () => {
	const currentTime = useRef();
	const [clockState, setClockState] = useState();

	// (currentTime.innerText = getTime)

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			const getTime = date.toLocaleTimeString();

			setClockState(getTime);
		}, 1000);
	}, []);
// Test
	return (
		<div>
			<h2 ref={currentTime} id='current-time'>
				{clockState}
			</h2>
		</div>
	);
};

export default Clock;
