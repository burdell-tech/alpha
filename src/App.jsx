import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Burdell Tech</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/services" className="hover:underline">Services</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          © 2025 Burdell Tech
        </footer>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Burdell Tech</h1>
      <p className="text-lg">Engineering modern solutions for today's challenges.</p>
    </div>
  );
}
