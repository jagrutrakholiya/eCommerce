import Header from "../../component/header";
import Slider from "../../component/slider/slider";
import WeddingCostumCard from "../../component/wedding-costum-card";
import WeddingClotheType from "../../component/wedding-clothe-type";
import Banner from "../../component/banner";
const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <WeddingCostumCard />
      <WeddingClotheType />
      <Banner />
    </>
  );
};

export default HomePage;
