import Footer from '../components/Footer';
import Header from '../components/Header';
import './Welcome.css';
import close from './close.png';

export default function Welcome() {
    return (
        <>
            <Header />
           <div className='welcome-content'>
            {/* TODO: add function that on click - closes modal */}
            <div className='close-btn-container'><span><img src={close}/></span></div>
           <h1 className='welcome-title'>Hi, Welcome to Illuminate</h1>
           <h2 className='welcome-subtitle'>Achieve your goals with a path designed just for you.</h2>
           <a href='/welcome' className='btn'>Let's go!</a>
           {/* TODO: change link for button */}
           </div>
            <Footer />
        </>
    )
}