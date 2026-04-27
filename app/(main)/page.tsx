import AboutA1 from "./components/AboutA1";
import Banner from "./components/Banner";
import Carousel from "./components/carousel/Carousel";
import ContactTeam from "./components/ContactTeam";
import PricingCards from "./components/PricingCards";
import PromotionalBanner from "./components/PromotionalBanner";
import ServiceCard from "./components/ServiceCards";

export default function Home() {
  return (
    <>
      <Carousel />
      <ServiceCard/>
      <AboutA1/>
      <PricingCards/>
      <PromotionalBanner/>
      <ContactTeam/>
      <Banner/>
    </>
  );
}
