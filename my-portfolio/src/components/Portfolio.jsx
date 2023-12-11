import React from 'react';
import weatherDashboardImg from '../assets/images/Weather-Dashboard.PNG';
import ezStreamImg from '../assets/images/ezstream.PNG';
import playJoinImg from '../assets/images/playjoin.PNG';
import insurancePlanImg from '../assets/images/placeholder website 4.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Past Works</h2>
      <div className="portfolio-item featured">
        <a href="https://nba251522.github.io/Weather-Dashboard/">
          <img src={weatherDashboardImg} alt="Weather Dashboard Project" />
          <h3>Weather Dashboard</h3>
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://migsrkrd.github.io/EZ-Stream/">
          <img src={ezStreamImg} alt="EZ Stream Project" />
          <h3>EZ Stream</h3>
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://play-join-6cebcc414827.herokuapp.com/">
          <img src={playJoinImg} alt="Play.Join Project" />
          <h3>Play.Join</h3>
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://altcampus.com/posts/list-of-simple-projects-to-build-to-learn-and-be-good-at-html-and-css">
          <img src={insurancePlanImg} alt="Insurance Plan Website Project" />
          <h3>Insurance Plan Website (Placeholder)</h3>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;