import { useEffect, useState } from "react";
import '../components/Card.css'
import Products from "./Products";

const Counter = () => {

  const [Count , setCount] = useState(0)


  const decrease = () => {
    setCount(prev=> prev-1)
  }

  const reset = () => {
    setCount(0)
  }
  
  const increase = () => {
    setCount(prev=> prev+1)
  }

  const [ data , setData ] = useState([])

  useEffect(()=> {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data,'data')
        setData(data)
      });
  }, [])


  return (
    <>
    <div className="count">
      <h1>Count is {Count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>+</button>
      {
      data.length > 0 && <Products data={data}/>
      }
    </div>
    
    </>
  )
}

export default Counter