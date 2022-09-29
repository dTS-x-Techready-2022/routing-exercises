import { Link } from 'react-router-dom';

export default function GalleryImage1() {
  return (
    <div>
      <h1>This is Blog 1</h1>
      <br />
      <img src="../logo.svg" alt="Logo" />
      <br />
      <Link to="/blog">Return to Blog</Link>
    </div>
  );
}
