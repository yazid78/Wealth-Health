import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../css/header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <h1>HRnet</h1>
                <Link to={'/employee'}><h3> View Current Employees</h3></Link>
            </nav>

        </header>
    );
}

export default Header;
