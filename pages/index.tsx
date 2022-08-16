import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reach from "../components/organisms/Reach";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reach />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
