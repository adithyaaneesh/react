import './App.css';
import { useState } from 'react';

const Parent = () => {
  const data = "hello world";
  return(
    <Child name={data}/>
  );
}
const Child = (props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

function App() {
  const [data , setData]  = useState ("HelLo WoRld")
  return (
    <Apk message={data}/>
  );
}
function Apk(props) {
  return (
    <div>
      {props.message}
    </div>
  );
}

export default Parent;