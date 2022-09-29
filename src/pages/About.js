import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </div>
  );
}
