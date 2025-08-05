import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src='/images/logo.svg' />
                    <h3>Nexcent</h3>
                    <p>Copyright © 2020 Landify UI Kit.<br/>All rights reserved</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Stay up to date</h4>
                        <label htmlFor="email-signup" className="visually-hidden">Your email address</label>
                        <input id="email-signup" type="email" placeholder="Your email address" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer


