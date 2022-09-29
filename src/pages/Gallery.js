import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <Link to="/gallery/img1">To Image 1</Link>
      <br />
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
