import { useRef } from "react";
import './Clock.css';

const Clock = () => {
    const currentTime = useRef(); 
    let d = new Date();
    const getTime = d.toLocaleTimeString();
// getTime=currentTime.innerText; 
    
    return (
        <div>
            <h2 ref={currentTime} id='current-time'>{currentTime.innerText=getTime}</h2>
        </div>
    )
};

export default Clock;