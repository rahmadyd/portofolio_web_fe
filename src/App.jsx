import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';

function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => {
        io.observe(el);
      });
    };

    observeElements();

    // Use MutationObserver to support Vite HMR
    const observer = new MutationObserver(observeElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <main id="top">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
