import { type } from '@testing-library/user-event/dist/type';
import { useReducer } from 'react'

const initialState = { count:0 };

const counterReducer = (state , action) => {
  switch ( action.type ) {
    case 'increment' :
      return { count: state.count + 1 };
    case 'decrement' :
      return { count: state.count - 1 };
    case 'reset' :
      return initialState;
    default :
    throw new Error();
  }

}


const Usereducer = () => {
    const [state , dispatch] = useReducer (counterReducer , initialState);

  return (
    <div>
      <p>Count is { state.count }</p>
      <button onClick={ () => dispatch({type:'increment'})}>Increment</button>
      <button onClick={ () => dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={ () => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Usereducer
