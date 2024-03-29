import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSectionAccessories from "./components/FeatureSectionAccessories";
import FeatureSectionTech from "./components/FeatureSectionTech";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category/>
      <FeatureSectionTech />
      <FeatureSectionAccessories />
      <Banner />
      <BlogSection />
    </main>
  );
};

export default App;
