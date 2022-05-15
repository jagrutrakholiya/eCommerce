import Header from "../../component/header";
import Slider from "../../component/slider/slider";
import WeddingCostumCard from "../../component/wedding-costum-card";
import WeddingClotheType from "../../component/wedding-clothe-type";
import Banner from "../../component/banner";
import LatestArrivals from "../../component/latest-arrivals";
import Footer from "../../component/footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <WeddingCostumCard />
      <WeddingClotheType />
      <Banner />
      <LatestArrivals />
      <Footer />
    </>
  );
};

export default HomePage;
