import './App.css';
import data from './data/navBarData.json';
import Navbar from './Components/Navbar';
import MainInfo from './Components/MainInfo';
import WhyUs from './Components/WhyUs';
import Footer from './Components/Footer';
import ScrollEffect from './Components/ScrollEffect';

function App() {



  return (
    <>
      <ScrollEffect />
      <Navbar data={data} />
      <MainInfo />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
