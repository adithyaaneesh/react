import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './data/ThemeContext';
import ToolBar from './data/ToolBar';
import Usereducer from './components/Usereducer';
import { CounterContext, CounterProvider } from './components/Context.';


const App = () => {
  const [ theme , setTheme] = useState('light')
  const toogleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }


  return (
    <div>
      <ThemeContext.Provider value={{ theme , toogleTheme}}>
        <ToolBar/>
      </ThemeContext.Provider>
      <Usereducer/>
      <CounterContext/>
      <CounterProvider/>
    </div>
  );
}

export default App;
