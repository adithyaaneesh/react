import '../styles/Header.css'

const  Header = () => {

    return (
        <header  className='container'>
            <div>
                
                <h2>Nexcent</h2>
            </div>
            <div className='menu-list'>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <button>Register Now</button>
                    </ul>
                </nav>
            </div>     
        </header>
    );
}
export default Header