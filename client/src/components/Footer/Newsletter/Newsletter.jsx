import "./Newsletter.scss";
import {
    FaFacebookF,FaTwitter,FaInstagram,FaLinkedin
} from 'react-icons/fa';
import Footer from "../Footer";
const Newsletter = () => {
    return (
        <>
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">News Letter</span>
                <span className="big-text">SignUP for latest Updates</span>
                <div className="form">
                    <input type='text' placeholder="Email Address"></input>
                    <button >Subscribe</button>
                </div>
                <div className="text">will be used according to Privacy Policy</div>
                <div className="social-icons">
                    <div className="icons">
                        <FaFacebookF size={14}/>
                    </div>
                    
                    <div className="icons">
                        <FaTwitter size={14}/>
                    </div>
                    <div className="icons">
                        <FaInstagram size={14}/>
                    </div>

                    <div className="icons">
                        <FaLinkedin size={14}/>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Newsletter;
