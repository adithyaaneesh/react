import './App.css';
import { useState } from 'react';

function Button() {
  const [count,setCount] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  function reset() {
    setCount(0);
  }
  function decreaseCount(){
    setCount(count-1);
  }
  return (
    <div className='counter'>
      <h3>Count</h3>
      <p>{count}</p>
      <button onClick={decreaseCount}>-</button>
      <button onClick={reset}>RESET</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
export default Button;

