import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { ThemeContext } from './data/ThemeContext';
import ToolBar from './data/ToolBar';
import Usereducer from './components/Usereducer';
import { CounterContext, CounterProvider } from './components/CounterContext';
import Dashboard from './components/Dashoboard';
import Login from './components/Login';

import React, { Suspense } from 'react';
import ErrorBoundary from './data/ErrorBoundary';



const App = () => {
  // const [ theme , setTheme] = useState('light')
  // const toogleTheme = () => {
  //   setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  // }




  const LazyComponent = React.lazy(() => import('./data/LazyLoader'));

  return (
        <div>
          <h1>Welcome to My Application</h1>
          {/* Wrap the lazy-loaded component with Suspense */}
          <Suspense fallback={<div>Loading Lazy Component...</div>}>
            <LazyComponent />
          </Suspense>
       


      {/* <ThemeContext.Provider value={{ theme , toogleTheme}}>
        <ToolBar/>
      </ThemeContext.Provider>
      <Usereducer/>
      <CounterContext/>
      <CounterProvider/> */}
      <ErrorBoundary>
        <Dashboard/>
        <Login/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
