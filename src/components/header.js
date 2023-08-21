import { Link } from "react-router-dom";
import "../components/header.css";

const Header = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692075742/happy%20cure%20clinic/medical-logo_fh2nih.png" />
                <div className='header'>
                    <a href='#' className='logo-name'>HAPPY <span>CURES</span> CLINIC</a>
                </div>
            </div>
            <nav className="navbars">
                <ul>
                    <div id='menu-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header;