import React from 'react';
import { FaJava, FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiSpringboot, SiCplusplus, SiC } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'Node.js', icon: <FaNode />, color: '#68a063' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'SQL', icon: <DiDatabase />, color: '#00758f' },
        { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'C', icon: <SiC />, color: '#A8B9CC' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
    ];

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div 
                        className="skill-box reveal" 
                        key={index} 
                        style={{ 
                            transitionDelay: `${index * 50}ms`,
                            '--skill-color': skill.color 
                        }}
                    >
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;