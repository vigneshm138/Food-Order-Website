import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                   <h3 className='logo_footer'>vy foody</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos incidunt magnam nesciunt blanditiis nemo iste omnis voluptas error nostrum libero. Sed natus voluptatum optio quam quos nulla quae ut earum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=''/>
                        <img src={assets.twitter_icon} alt=''/>
                        <img src={assets.linkedin_icon} alt=''/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>Get IN TOUCH</h2>
                    <ul>
                        <li>+91-6383863585</li>
                        <li>vigneshmb138@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @ vyfoody.com. All Right Reversed.</p>
        </div>
    )
}

export default Footer
