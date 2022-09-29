import { Link } from 'react-router-dom';

export default function Blog1() {
  return (
    <div>
      <h1>This is Blog 1</h1>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque vitae nulla corrupti distinctio accusantium, ea ut quo, error reprehenderit autem eum fuga nesciunt nisi nostrum sunt ullam minus doloribus.</p>
      <br />
      <Link to="/blog">Return to Blog</Link>
    </div>
  );
}
