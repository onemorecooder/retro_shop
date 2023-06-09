import "./App.css";
import data from "./data/navBarData.json";
import cardData from "./data/cardData.json";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import MainInfo from "./Components/MainInfo";
import AboutUs from "./Components/AboutUs";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import ScrollEffect from "./Components/ScrollEffect";

import Links from "./Components/Links";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <div className="fixed bottom-0 right-0 p-6">
        <ScrollToTop />
      </div>
      <ScrollEffect />
      <Navbar data={data} />
      <MainInfo />
      <AboutUs />
      <WhyUs />
      <Card cardData={cardData} />
      <Contact />

      <Links />

      <hr className="mx-20"></hr>
      <Footer />
    </>
  );
}

export default App;
