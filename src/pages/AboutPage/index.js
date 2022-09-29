import React from 'react';
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default AboutPage;
