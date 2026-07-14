import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-transparent font-sans text-brand-text">
      <Navbar />
      
      <main>
        <Hero />
        
        <Section id="about" title="About">
          <About />
        </Section>
        
        <Section id="skills" title="Expertise">
          <Skills />
        </Section>
        
        <Section id="projects" title="Selected Work">
          <Projects />
        </Section>
        
        <Section id="services" title="Services">
          <Services />
        </Section>
        
        <Section id="resume" title="Resume">
          <Resume />
        </Section>
        
        <Section id="contact" title="Get in Touch">
          <Contact />
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
