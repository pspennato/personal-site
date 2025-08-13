import Header from '../../components/layouts/header';
import Hero from '../../components/sections/Hero';
import Services from '../../components/sections/Services';
import AboutMe from '../../components/sections/AboutMe';
import TechStack from '../../components/sections/TechStack';
import Projects from '../../components/sections/Projects';
import Contact from '../../components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
     <Services />
     <AboutMe />
     <TechStack />
     <Projects />
     <Contact />
    </main>
  );
}