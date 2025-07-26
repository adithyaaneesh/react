import './App.css';
import { useState } from 'react';

function Parent() {
  const data = "hello world";
  return(
    <Child string={data}/>
  );
}
function Child(props) {
  return (
    <div>
      {props.string}
    </div>
  )
}


function Parent() {
  const [data , setData]  = useState ("HelLo WoRld")
  return (
    <Child message={data}/>
  );
}
function Child(props) {
  return (
    <div>
      {props.message}
    </div>
  );
}

export default Parent;