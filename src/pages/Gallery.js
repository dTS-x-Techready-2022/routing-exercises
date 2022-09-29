import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <Link to="/gallery/img1">To Image 1</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </div>
  );
}
