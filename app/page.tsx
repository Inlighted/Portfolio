import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import LeetCode from "@/components/LeetCode";
import GitHubSection from "@/components/GitHubSection";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <LeetCode />
      <GitHubSection />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
