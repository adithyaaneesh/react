import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Features from './pages/Features';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
