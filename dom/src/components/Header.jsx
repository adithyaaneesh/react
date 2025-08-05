import '../styles/Header.css'
import { Link } from "react-router-dom"


const  Header = () => {

    return (
        <header  className='container'>
            <div>
                
                <h2>Nexcent</h2>
            </div>
            <div className='menu-list'>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/features'}>Features</Link></li>
                        <li><Link to={'/community'}>Community</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/pricing'}>Pricing</Link></li>
                        <button>Register Now</button>                        
                    </ul>
                </nav>
            </div>     
        </header>
    );
}
export default Header