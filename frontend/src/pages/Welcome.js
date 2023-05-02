import Footer from '../components/Footer';
import Header from '../components/Header';
import './Welcome.css';
import close from './close.png';
import welcomeGrouped from './welcomeGrouped.png';
import welcomeOne from './welcome1.png';
import welcomeTwo from './welcome2.png';
import welcomeThree from './welcome3.png';
import TextImage from '../components/TextImage';

export default function Welcome({isLoggedIn}) {
    const textImageContent = [
        {image: welcomeOne,
        subtitle: 'Share your learning objectives',
        text: 'Answer a few questions to share your learning goals and preferences.'
    },
        {image: welcomeTwo,
        subtitle: 'Get a personalized path',
        text: 'Based on your responses, we recommend a personalized path tailor-made to achieve your learning objectives.'
    },
        {image: welcomeThree,
        subtitle: 'Start learning',
        text: 'Make the most out of the Educative platform and achieve your learning goals.'
    },
    ]

    const textImageComponents = textImageContent.map((content) => {
        return <TextImage 
        image={content.image} 
        subtitle={content.subtitle}
        text={content.text}/>
    })

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <div className='form-container'>
                {/* TODO: add function that on click - closes modal */}
                <div className='close-btn-container'>
                    <span><img src={close} /></span>
                </div>
                <h1 className='welcome-title'>Hi, Welcome to Illuminate</h1>
                <h2 className='welcome-subtitle'>Achieve your goals with a path designed just for you.</h2>
                <a href='/form' className='btn'>Let's go!</a>
                <div className='welcome-img-grouped'>
                    <img className='' src={welcomeGrouped} />
                </div>
                <h2 className='welcome-subtitle-2'>How it works?</h2>
                <div className='welcome-textimg-ungrouped'>
                    {textImageComponents}
                </div>
                {/* TODO: change link for button */}

            </div>
            <Footer />
        </>
    )
}