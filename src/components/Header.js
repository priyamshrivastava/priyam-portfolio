import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">Priyam.</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-right">
                <div className="resume-btn">
                    <a href="https://drive.google.com/file/d/1nwyeImnPKHduTUQqjgPV3q7KUlGKdKY1/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">View Resume</a>
                </div>
                {/* Using inline style for the background image to avoid build errors if file is missing */}
                <div className="profile-pic" style={{ backgroundImage: 'url(/profile.jpg)' }}></div>
            </div>
        </header>
    );
};

export default Header;