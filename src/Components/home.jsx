import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function home() {
    return (
        <div id="home">
            {/* <main> */}
            <div id="home-content">
                <h3>Hello It's me</h3>
                <h1>Rishabh Srivastava</h1>
                <h3>
                    <div className="animated-text">
                    I'm <span></span>
                    </div>
                </h3>
                <p>Welcome to a world of endless possibilities, explore captivating ideas in my digital sanctuary and receive a warm welcome!</p>
                <div id="social-media">
                    <a target='_blank' href="https://github.com/Rishabh6306"><FaGithub size={32} id='github' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/rishabh-srivastava-b68684262/"><FaLinkedin size={32} id='linkedin' /></a>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100092759361139"><FaFacebook size={32} id='facebook' /></a>
                    <a target='_blank' href="https://www.instagram.com/rishabhsrivastava723/"><FaInstagram size={32} id='instagram' /></a>
                </div>
            </div>

            <div className="home-img">
                <img src='/public/Icons&logo/profile.jpg' alt="Profile" />
            </div>
            {/* </main> */}
        </div>
    )
}