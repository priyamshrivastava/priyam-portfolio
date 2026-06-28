import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Software Developer", "Java Developer", "Backend Developer"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Priyam Shrivastava</h1>
                <h3>I am a <span className="typewriter">{text}</span><span className="cursor-blink">|</span></h3>
                <p>Pre-final year B.Tech student passionate about building scalable software solutions.</p>
                <div className="social-icons">
                    <a 
                        href="https://github.com/priyamshrivastava" 
                        target="_blank" 
                        rel="noreferrer"
                        className="github-icon"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/priyam-shrivastava-6484a533b/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="linkedin-icon"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://leetcode.com/u/Priyam__Shrivastava/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="leetcode-icon"
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;