import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2023 Rishabh Srivastava. All rights reserved.</p>
                <div id="social-media">
                    <a target='_blank' href="https://github.com/Rishabh6306"><FaGithub size={32} id='github' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/rishabh-srivastava-b68684262/"><FaLinkedin size={32} id='linkedin' /></a>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100092759361139"><FaFacebook size={32} id='facebook' /></a>
                    <a target='_blank' href="https://www.instagram.com/rishabhsrivastava723/"><FaInstagram size={32} id='instagram' /></a>
                </div>
            </div>
        </footer>
    );
}