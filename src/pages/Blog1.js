import { Link } from 'react-router-dom';

export default function Blog1() {
  return (
    <div>
      <h1>This is Blog 1</h1>
      <Link to="/blog">Return to Blog</Link>
    </div>
  );
}
