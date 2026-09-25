import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import FocusAreas from "../components/FocusAreas/FocusAreas.jsx";
import Work from "../components/Work/Work.jsx";
import Contact from "../components/Contact/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <Work />
      <Contact />
    </>
  );
}
