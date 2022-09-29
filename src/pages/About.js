import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="/" style={{ margin: '5px' }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: '5px' }}>
          About
        </Link>
        <Link to="/blog" style={{ margin: '5px' }}>
          Blog
        </Link>
        <Link to="/gallery" style={{ margin: '5px' }}>
          Gallery
        </Link>
      </nav>
    </div>
  );
}
