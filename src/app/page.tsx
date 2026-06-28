import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero";
import AboutReveal from "@/sections/About";
import Process from "@/sections/process/Process";
import StackSection from "@/components/StackSection";
import ProjectCard from "@/components/project/projectCard";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutReveal />
        </section>
        <Process />
        <section id="skills">
          <StackSection />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <ProjectCard />
      </main>
    </>
  );
}
