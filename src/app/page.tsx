import Categories from "./Components/Categories";
import CompanyLogo from "./Components/CompanyLogo";
import Hero from "./Components/Hero";
import HotProduct from "./Components/hotProducts";
import OurProduct from "./Components/ourProduct";
import FeaturesProduct from "./Components/featuresProduct";


export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <FeaturesProduct />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
