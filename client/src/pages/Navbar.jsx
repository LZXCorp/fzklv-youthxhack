import Unity from '../assets/Unity-removebg_small.png'
import LanguageToggle from '../components/LanguageToggle'
import Text from '../components/Text'
import '../assets/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="div_logo">
                <img src={Unity} alt="" className="logo" />
            </div>
            <ul className="navLinks">
                <li>
                    <Link to="" className="navLink">
                        <Text english={'About'} chinese={'关于'} />
                    </Link>
                </li>
                <li>
                    <Link to="" className="navLink">
                        <Text english={'Event'} chinese={'活动'} />
                    </Link>
                </li>
                <li>
                    <Link to="" className="navLink">
                        <Text english={'Contact'} chinese={'联系'} />
                    </Link>
                </li>
                <li className="navLink">
                    <LanguageToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
