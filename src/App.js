import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';
import Gallery from './pages/Gallery';
import GalleryImage1 from './pages/GalleryImage1';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/img1" element={<GalleryImage1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
