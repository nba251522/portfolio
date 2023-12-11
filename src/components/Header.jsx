import React from 'react';
import profilePicture from '../assets/image0.jpg'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Thomas Er</h1>
        <img src={profilePicture} alt="Thomas Er's photo" className="profile-picture" />
      </div>
    </header>
  );
};

export default Header;