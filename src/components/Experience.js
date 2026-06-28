import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-timeline">
                <div className="timeline-item reveal">
                    <h3>Software Developer Intern</h3>
                    <span>Company Name | Date</span>
                    <p>Description of your role and achievements.</p>
                </div>
                {/* Add more experience items here */}
            </div>
        </section>
    );
};

export default Experience;