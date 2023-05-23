import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import Navbar from '../components/layout/navbar';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Project from '../components/Project';
// import { Container } from '../components/ui/containers';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Layout className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">

      <Navbar />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section> */}

      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      {/* <section id="#projects" className='snap-center'>
        <Projects />
      </section> */}

      <section id="projects" className='snap-center'>
        <Project />
      </section>

      <section id="education" className='snap-center'>
        <Education />
      </section>

      <section id="contact" className='snap-center'>
        <Contact />
      </section>
      {/* <Header /> */}
      {/* <Container className='flex justify-center items-center text-center h-[85vh]'>
        <h1 className='text-4xl font-bold'>
          Amit Patel&apos;s <span className='text-purple-600'>Personal Portfolio</span>
        </h1> 
      </Container> */}
    </Layout>
  );
};

export default Home;
