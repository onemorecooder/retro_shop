import "./App.css";
import data from "./data/navBarData.json";
import cardData from "./data/cardData.json";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import MainInfo from "./Components/MainInfo";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import ScrollEffect from "./Components/ScrollEffect";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <ScrollEffect />
      <Navbar data={data} />
      <MainInfo />
      <WhyUs />
      <Card cardData={cardData} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
