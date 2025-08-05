import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';

function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/list' element={<p>List</p>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
