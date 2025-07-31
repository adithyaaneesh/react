import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { students } from './data/products';

function App() {


  return (
    <div className='courses'>
     {
      students.map(student=> <Card data={student}/>)
     }
    </div>
  );
}

export default App;
