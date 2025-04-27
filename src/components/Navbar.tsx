import '../App.css';
import Download from '../assets/icons/shared/download.svg';
import { Link, useLocation } from 'react-router-dom';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/data/Stephanie_Ignas_Resume.pdf';
    link.download = 'Stephanie_Ignas_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function Navbar() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav className="navbar">
            <Link to="/">
                <h3 className="gradient-text bold-text">SLI</h3>
            </Link>
            <div className="nav-links">
                <Link to="/about" className={path === '/about' ? 'active' : ''}>About</Link>
                <Link to="/portfolio" className={path === '/portfolio' ? 'active' : ''}>Portfolio</Link>
                {/* <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link> */}
                <button className="button button-nav" onClick={handleDownload}>
                    <p className="gradient-text font-semibold">Download CV</p>
                    <img width="20px" src={Download} alt="Download icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
