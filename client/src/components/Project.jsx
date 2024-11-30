import React, { useState } from 'react';
import '../style/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Agrirenthub from '../assets/agrirenthub.png';
import Bandobast from '../assets/image.png';
import SustainX from '../assets/sustainx.png';
import margdarshak from '../assets/margdarshak.png';

const projects = [

  {
    id: 1,
    title: 'Margdarshak',
    tech: ['react', 'node.js', 'express', 'mongodb', 'Tailwind CSS', 'Google Meet API', 'Google Meet API'],
    description: ' Developing Margdarshak, a mentorship platform, enabling efficient slot-based scheduling and coordination between over 50+ mentors and mentees. Implemented mentor availability and booking features with real-time slot management; mentors can review and accept requests based on availability. Deployed the project on Vercel, optimizing response times by 30%. Technologies used: React.js, Node.js, Express.js, MongoDB Atlas, and Tailwind CSS.',
    image: margdarshak,
    github: 'https://github.com/nayanraut1412/Margdarshak-Find_The_Right_Mentor',
    live: 'https://margdarshak-find-the-right-mentor.vercel.app/home'
  },
  {
    id: 2,
    title: 'SustainX',
    tech: ['Flutter', 'Firebase', 'Razorpay Pay API ', 'react', 'Google Maps API', 'Python'],
    description: 'Developed SustainX an app-based platform that optimizes trash collection process for both customers and collectors. Made use of ML algorithm- ResNet 152 to train model for trash segregation and classification further increasing accuracy by 92% and Project selected for Google Solution Challenge’s Regional Bootcamp. Technologies used: Flutter, React, Firebase, Cloud Firestore, Google Maps API, Python, ResNet-152 and Razorpay Pay API and Utilized Figma to craft an aesthetically pleasing user interface for the application.',
    image: SustainX,
    github: 'https://github.com/nayanraut1412/SustainX',
  },
 
  {
    id: 3,
    title: 'Band-O-bast',
    tech: ['html', 'css', 'javascript', 'firebase', 'arduino IDE'],
    description: 'Built an IoT-based solution for the Grand Finale of the Smart India Hackathon 2023. Created a wearable device using ESP8266, MAX30100 Pulse Oximeter, LoRa SX1278, and GPS Neo6M to monitor and track over 100 deployed police personnel during Bandobast events. Programmed hardware with Arduino IDE for real - time geo - location updates every 5 seconds to Firebase, ensuring precise tracking.',
    image: Bandobast,
     github: 'https://github.com/nayanraut1412/band-o-bast'
    
  },
  {
    id: 4,
    title: 'Agricultural Equipment Rental System',
    tech: ['php', 'html', 'css', 'razorpay', 'smtp-mailer', 'mysql'],
    description: 'AgriRentHub is a user-friendly online platform designed to empower farmers. This platform facilitates farmers in renting their equipment to fellow farmers at cost-effective rates, creating an opportunity to generate extra income. A smart and efficient solution for optimizing resources in agriculture.',
    image: Agrirenthub,
    github: 'https://github.com/nayanraut1412/AgriRentHub',
  },
  

];

const Project = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
      project.tech.map(t => t.toLowerCase()).includes(filter)
    );

  return (
    <div id="projects" className="project">
      <h2 className="project_heading">Projects</h2>
      <div className="project_buttons">
        <button
          className={`project_button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`project_button ${filter === 'php' ? 'active' : ''}`}
          onClick={() => setFilter('php')}
        >
          PHP
        </button>
        <button
          className={`project_button ${filter === 'react' ? 'active' : ''}`}
          onClick={() => setFilter('react')}
        >
          React
        </button>
        <button
          className={`project_button ${filter === 'node.js' ? 'active' : ''}`}
          onClick={() => setFilter('node.js')}
        >
          Node.js
        </button>

        <button
          className={`project_button ${filter === 'machine learning' ? 'active' : ''}`}
          onClick={() => setFilter('machine learning')}
        >
          Machine Learning
        </button>
      </div>
      <div className="project_cards">
        {filteredProjects.map(project => (
          <div key={project.id} className="project_card">
            <img src={project.image} alt={project.title} />
            <h3 className="project_card_title">{project.title}</h3>
            <div className="project_card_tech">
              {project.tech.map(t => (
                <button key={t} className="tech_button">{t}</button>
              ))}
            </div>
            <p className="project_card_description">{project.description}</p>
            <div className="project_card_icons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="project_card_icon" />
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} className="project_card_icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
