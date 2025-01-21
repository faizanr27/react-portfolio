import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="backdrop-filter backdrop-blur-xs">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;


