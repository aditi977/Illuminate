import './GeneratedPath.css'
import close from './images/close.png';
import clock from './images/clock.png';
import book from './images/book.png';
import flag from './images/flag.png';
import windows from './images/windows.png';
import sharedGoals from './images/Shared goals-cuate.png';
export default function GeneratedPath() {
    return (
        <>
            <div className='gp-container'>
                <div className='close-btn-container'>
                    <span><a href="/"><img src={close} /></a></span>
                </div>
                <h1 className='gp-title'>Spring and Spring Boot Essentials</h1>
                    <h2 className='gp-subtitle'>Learn the essentials of Spring and Spring Boot</h2>
                <div className='learn-obj-container'>
                
                    <ul className='learn-obj'>
                    <p>Learning Objectives</p>
                    <li>Understand the basic concepts of the Spring Framework.</li>
                    <li>Learn about the Spring architecture.</li>
                    <li>Master the concepts of beans, bean scope, bean lifecycle, contexts, and dependency injection framework.</li>
                    <li>Learn how Spring searches for beans found in different packages.</li>
                    <li>Learn about Spring Boot.</li>
                    <li>Learn to create a REST controller using Spring Boot.</li>
                    </ul>
                    <img className='gp-shared-goals-img' src={sharedGoals}/>
                </div>
                <div>
                    <ul className='gp-info'>
                        <li><img src={clock}/>&nbsp;28 Hours</li>
                        <li><img src={book}/>&nbsp;122 Lessons</li>
                        <li><img src={windows}/>&nbsp;11 Quizzes</li>
                        <li><img src={flag}/>&nbsp;24 Challenges</li>
                    </ul>
                    <button className='btn'>Begin!</button>
                </div>
            
            </div>
        </>
    )
}