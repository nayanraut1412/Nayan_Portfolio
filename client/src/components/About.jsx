import React from 'react';
import github from '../assets/github.webp';
import linkedin from '../assets/linkedin.webp';
// import leetcode from '../assets/leetcode.png';
import gmail from '../assets/gmail.webp';
import resumePDF from '../assets/nayan_resume.pdf';

import '../style/About.css';

const About = () => {
  
  // Function to handle the download and open in a new tab
  const handleResumeDownload = () => {
    window.open(resumePDF, '_blank');

    // Create a temporary anchor tag to trigger the download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Nayan_Raut_Resume.pdf'; // Specify the download file name
    link.click(); // Trigger the download
  };

  return (
    <section className="about flex justify-around items-center p-8 ">
      {/* Left Side: Text and Icons */}
      <div className="about_left" id="about">
        <h1 className="about_left_head">Hi, I&apos;m Nayan Raut</h1>
        <h2 className="about_left_subhead">Full Stack Developer</h2> {/* Added subheading */}
        <p className="about_left_text">
        I'm Nayan Raut, a Computer Science Engineering student with a focus on Development. I have a strong enthusiasm for crafting clean, efficient, and optimized code. Problem-solving is my passion, and I thrive on learning and adapting to new technologies.
        </p>
        <div className="about_left_socialMedia">
          <img src={github} alt="GitHub" onClick={() => window.open('https://github.com/nayanraut1412', '_blank')} />
          <img src={linkedin} alt="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/nayanraut1412/', '_blank')} />
          {/* <img src={leetcode} alt="LeetCode" onClick={() => window.open('https://leetcode.com/u/nayanraut1412/', '_blank')} /> */}
          <img src={gmail} alt="Email" onClick={() => window.open('mailto:nayanraut1412@gmail.com', '_blank')} />
        </div>
        <div className="about_buttons">
          {/* Button to trigger opening PDF in a new tab and downloading it */}
          <button className="download_resume" onClick={handleResumeDownload}>
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Side: Profile Photo */}
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </section>
  );
};

export default About;
