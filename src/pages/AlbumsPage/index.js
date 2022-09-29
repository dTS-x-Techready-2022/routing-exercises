import React from 'react';
import { Link } from "react-router-dom";

const AlbumsPage = () => {
  return (
    <div>
      <h1>Album Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default AlbumsPage;
