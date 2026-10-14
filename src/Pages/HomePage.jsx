import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import BlogSection from "../components/Cards-2";
import FashionSection from "../components/FashionSection";
import SuccessStories from "../components/SuccessStories";

function HomePage() {
  return (
    <>
      {" "}
      <HeroSection />
      <Cards />
      <BlogSection />
      <FashionSection />
      <SuccessStories />
    </>
  );
}

export default HomePage;
