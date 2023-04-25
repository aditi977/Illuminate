import Header from "../components/Header";
import Footer from "../components/Footer";
import './LandingPage.css';
import largeText from './largeText.png';
import heroImage from './heroImage.png';

export default function Home() {
    return (
      <>
        <Header/>
        <div className='main-content'>
        <div className='main-text-content'>
        <img src={largeText} width='555px'/>
        <a href="/signup" className='cta-btn'>Get Started</a>
        </div>

        <div className='hero-image'>
          <img src={heroImage} width='444px'/>
        </div>
        </div>
        <div className='footer-container'> <Footer/> </div>
        
      </>
    )
  }