import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { ThemeContext } from './data/ThemeContext';
import ToolBar from './data/ToolBar';
import Usereducer from './components/Usereducer';
import { CounterContext, CounterProvider } from './components/CounterContext';
import Dashboard from './components/Dashoboard';
import Login from './components/Login';


const App = () => {
  const [ theme , setTheme] = useState('light')
  const toogleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }




  return (
    <div>
      {/* <ThemeContext.Provider value={{ theme , toogleTheme}}>
        <ToolBar/>
      </ThemeContext.Provider>
      <Usereducer/>
      <CounterContext/>
      <CounterProvider/> */}
      <Dashboard/>
      <Login/>
    </div>
  );
}

export default App;
