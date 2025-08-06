import { useState } from 'react';
import '../styles/Home.css'

const Home = () => {

    const [state, setState] = useState(0)
    return (
        <div className='items container'>
            <div className="content">
                <h1>Lessons and insights <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>
            <div>
                <img src="/images/homeimg.svg" />
                {/* <h1>{state}</h1>
            <button onClick={()=> setState(prev=> prev+1)}>Change state value</button> */}
            </div>
        </div>
    );
}
export default Home