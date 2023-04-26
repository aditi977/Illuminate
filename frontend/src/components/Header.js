import './Header.css'
import logo from './logo.png'
import avatar from './avatar.png'
import Dropdown from './Dropdown'
export default function Header({ isLoggedIn }) {
    if (isLoggedIn) {
        return (
            // TODO: return different header based on isLoggedIn prop passed into component
            <div className='header'>
                <div className='logo'>
                    <a href="/"><img src={logo} /></a>
                </div>
                <div className='menu-container'>
                    <ul className='menu'>
                        <li> <Dropdown title={'Personalized Path'}/> </li>
                        <li> <Dropdown title={'Projects'}/> </li>
                        <li> <Dropdown title={'Jobs'}/> </li>
                    </ul>

                    <ul className='menu'>
                    <li><Dropdown title={'Browse'}/></li>
                    <li><a href='/welcome'>My Mentor</a></li>
                    <li > <div className='avatar'><img src={avatar} /></div></li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            // TODO: return different header based on isLoggedIn prop passed into component
            <div className='header'>
                <div className='logo'>
                    <a href="/"><img src={logo} height={'66px'} /></a>
                </div>
                <div className='menu-container-2'>
                    <ul className='menu'>

                        <li><a href='/'>Browse</a></li>
                        <li><a href='/'>Login</a></li>
                        <li><a href='/signup'>Join for Free</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}