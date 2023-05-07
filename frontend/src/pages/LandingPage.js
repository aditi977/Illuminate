import Header from "../components/Header";
import Footer from "../components/Footer";
import './LandingPage.css';
import largeText from './images/largeText.png';
import heroImage from './images/heroImage.png';

// Define the Home function component
export default function Home() {
    return (
      <>
      {/* Render the Header component */}
        <Header isLoggedIn={false}/>
        <div className='main-content'>
          <div className='main-text-content'>
          <img src={largeText} />
          <a href="/signup" className='cta-btn'>Get Started</a>
          </div>

          <div className='hero-image'>
            <img src={heroImage}/>
          </div>
        </div>
        <Footer/>
        
      </>
    )
  }