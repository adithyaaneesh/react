import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeBanner from './components/Home';
import Client from './components/Client';
import Footer from './components/Footer';
import Management from './components/Manage';
import Pixel from './components/Pixelgrade';
import Achieve from './components/Achievement';
import Site from './components/Sitefooter';
import Customer from './components/Customer';
import Marketing from './components/Marketing';

function App() {
  return (
    <>
    <Header />
    <HomeBanner />
    <Client />
    <Management />
    <Pixel />
    <Achieve />
    <Site />
    <Customer />
    <Marketing />
    <Footer />
    </>
  );
}

export default App;
