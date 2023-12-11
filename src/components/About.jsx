import React from 'react';
import fullstackDevCertImage from '../assets/fullstack-dev-cert-prutor.jpg';

const About = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <p>
       Hello, I'm Thomas Er. At 22, I may be newer to the world of web development, but my passion and dedication have rapidly elevated my skills, allowing me to produce top-tier web applications. While I've quickly become proficient in fundamental web technologies like HTML, CSS, GitHub, and JavaScript, it's my ability to understand and prioritize client needs that truly sets me apart.
       Every project I undertake is not just about the code but ensuring it deeply resonates with the target audience and meets its intended goals. Away from the keyboard, I'm committed to continuous learning, staying ahead of industry trends and best practices to deliver the best for my clients.
       If you are interested in working together, please feel free to send me your information through the contact form. Links to my socials are below as well.
      </p>
      <div>
      <img src={fullstackDevCertImage} alt="Fullstack Developer Certification" />
    </div>
    </section>
  );
};

export default About;