import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
