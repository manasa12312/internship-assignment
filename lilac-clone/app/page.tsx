import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";
import Office from "../components/Office";


export default function Home() {
  return (
    <main>
      <Hero />
      <Specialties />
      <About />
      <Office />
      <FAQ />
      <Credentials />
      <Footer />
    </main>
  );
}