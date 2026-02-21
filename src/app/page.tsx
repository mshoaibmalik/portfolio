import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import AnimatedSkills from '@/components/AnimatedSkills'
import CaseStudy from '@/components/CaseStudy'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <section id="projects">
        <Projects />
      </section>
      <AnimatedSkills />
      <section id="case-study">
        <CaseStudy />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </main>
  );
}
