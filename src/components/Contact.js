import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container reveal">
                <form id="contact-form" action="mailto:shrivastavapriyam1402@gmail.com" method="post" encType="text/plain">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="tel" name="phone" placeholder="Phone Number (10 digits)" pattern="[0-9]{10}" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;