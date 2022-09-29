import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link to="/blog/1">To Blog 1</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque vitae nulla corrupti distinctio accusantium, ea ut quo, error reprehenderit autem eum fuga nesciunt nisi nostrum sunt ullam minus doloribus.</p>
      <br />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </div>
  );
}
