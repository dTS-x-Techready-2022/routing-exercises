import React from 'react';
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/albums">Albums</Link>
    </div>
  );
}

export default ProfilePage;
