import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Features from './pages/Features';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='*' element={<div>Error - 404 </div>}/>
    </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
