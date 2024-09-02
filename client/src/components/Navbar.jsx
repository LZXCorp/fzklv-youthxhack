import Unity from '../assets/Unity-removebg_small.png'
import LanguageToggle from './LanguageToggle'
import Text from './Text'
import ThemeToggle from './Theme';
import '../assets/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="div_logo">
                <Link to="/"><img src={Unity} alt="" className="logo" /></Link>
            </div>
            <ul className="navLinks">
                <li>
                    <Link to="" className="navLink">
                        <Text english={'About'} chinese={'关于'} />
                    </Link>
                </li>
                <li>
                    <Link to="events" className="navLink">
                        <Text english={'Event'} chinese={'活动'} />
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className='navLink-1'>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <img className='pfp' src='https://images.unsplash.com/photo-1535213679542-f42b6f164647?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                            <Text english={'Profile'} chinese={'使用者'} className="profile"/>
                       </div>
                    </Link>
                </li>
                <li className="navLink">
                    <LanguageToggle />
                </li>
                <li className="navLink">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
