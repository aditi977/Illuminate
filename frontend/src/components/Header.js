import './Header.css'
import logo from './logo.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="/"><img src={logo} height={'66px'}/></a>
            </div>
            <div className='menu-container'>
                <ul className='menu'>
                    <li><a href='/'>Search</a></li>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/signup'>Join for Free</a></li>
                </ul>
            </div>
        </div>
    )
  }