import './Header.css'
import logo from './logo.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} height={'66px'}/>
            </div>
            <div className='menu-container'>
                <ul className='menu'>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>Login</a></li>
                    <li><a href='#'>Join for Free</a></li>
                </ul>
            </div>
        </div>
    )
  }