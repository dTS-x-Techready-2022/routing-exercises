import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link to="/blog/1">To Blog 1</Link>

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
