import Clock from '../Clock/Clock';
import imageOne from '../../assets/images/imageOne.jpg';
import './Background.css';

const Background = (props) => {
    return (
        <section className='container'>

            {/* Enter images below for the background */}
            <img src={imageOne}/>
                {/* Use logic within brackets on the img source */}
            {/* Will implement a loop with setInterval to switch between images like a screensaver carousel*/ }
            <Clock />

        </section>
    )
};

export default Background;