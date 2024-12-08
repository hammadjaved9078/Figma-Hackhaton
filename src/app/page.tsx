import Categories from "./Components/Categories";
import CompanyLogo from "./Components/CompanyLogo";
import Hero from "./Components/Hero";
import HotProduct from "./Components/hotProducts";
import OurProduct from "./Components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
