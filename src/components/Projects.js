import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        { 
            title: 'VortexOps', 
            icon: '🌀',
            description: 'Enterprise AI Observability Platform. Combines real-time telemetry streaming, intelligent infrastructure monitoring, production incident simulation, and AI-powered diagnostics into a unified operations dashboard.',
            tech: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS EC2', 'OpenRouter AI'],
            github: 'https://github.com/priyamshrivastava/vortexops-telemetry-suite',
            live: 'http://13.51.156.99:8080'
        },
        { 
            title: 'EventNexus AI', 
            icon: '🌌',
            description: 'Next-Generation AI Powered Event Management Ecosystem. Automates planning, scheduling, and attendee coordination with intelligent event recommendations, Dual-layer Email OTP, and Cloud Native architecture.',
            tech: ['Spring Boot', 'React', 'PostgreSQL', 'OpenRouter AI', 'Docker', 'Render'],
            github: 'https://github.com/priyamshrivastava/EventNexus-AI',
            live: null
        },
        { 
            title: 'Upcoming Project', 
            icon: '🚀',
            description: 'Currently working on more exciting projects. Stay tuned for updates!',
            tech: ['Java', 'React', 'Node.js'],
            github: 'https://github.com/priyamshrivastava',
            live: null
        }
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="project-header">
                            <h3><span className="project-icon">{project.icon}</span> {project.title}</h3>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" title="View Source">
                                        <FaGithub />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((techItem, techIndex) => (
                                <span key={techIndex} className="tech-tag">{techItem}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;