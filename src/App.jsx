import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      
      <main className="w-full max-w-7xl 2xl:max-w-[1440px] px-6 md:px-12 lg:px-20 grow space-y-32 py-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}

export default App;