import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../css/header.css'

const HeaderEmployee = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <h1>HRnet</h1>
                <Link to={'/'}><h3> Create Employee</h3></Link>
            </nav>

        </header>
    );
}

export default HeaderEmployee;
