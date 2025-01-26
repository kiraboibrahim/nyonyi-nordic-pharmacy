import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Gallery from "../Gallery/Gallery";
import TeamIntro from "../TeamIntro/TeamIntro";

export default function Home() {
  return (
    <>
    <Hero />
    <Services />
    <FeaturedProducts />
    <Gallery />
    <TeamIntro />
    </>
  );
}
