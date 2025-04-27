import '../App.css';
import socials from '../data/socials.json';

function Navbar() {
    return (
        <nav className="footer">
            <span>© Copyright <span className="gradient-text">Created by Stephanie</span></span>
            <div className="right-side">
                <a href="mailto:ignasstephanie@gmail.com">ignasstephanie@gmail.com</a>
                <div className="divider"></div>
                <div className="socials">
                    {socials.map((social, index) => (
                        <a href={social.link} target="_blank">
                            <img key={index} src={social.icon} alt={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
