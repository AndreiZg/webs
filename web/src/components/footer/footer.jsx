import './footer.css';
import { ReactComponent as FooterLogo } from '../../assets/images/footer-logo.svg';

const Footer = () =>{

    const socialMedia = ['viber','telegram','whatsapp'];

    const MediaItems = socialMedia.map((value, index) => (
        <button key={index}>{value}</button>
    ));

    return(
        <div className='footer'>
            <div className="footer-title title">
                <h1>Contact us 24/7</h1>
            </div>
            <div className="footer-container">
                <div className="footer-details">
                    <div className="footer-item">
                        <p className='info'>Phone</p>
                        <p className='second-info'>+420 775 329 625</p>
                    </div>
                    <div className="footer-item">
                        <p className='info'>Adress</p>
                        <p className='second-info adress'>Czech Republic office: Úvoz 4, 602 00 Brno-Brno-střed</p>
                    </div>
                    <div className="footer-item">
                        <p className='info'>Email</p>
                        <p className='second-info'>kostcode1@gmail.com</p>
                    </div>
                    <div className="footer-item">
                        <p className='info'>Working hours on weekdays</p>
                        <p className='second-info'>10:00-18:00</p>
                    </div>
                    <div className="footer-item">
                        <div className="footer-button">
                            <button>Email us</button>
                        </div>
                    </div>
                    <div className="footer-item">
                        <p className='info'>Working hours on weekends</p>
                        <p className='second-info'>Coding 24/7/365</p>
                    </div>
                </div>
                <div className="footer-social__container">
                    <div className='media-btn'>
                        {MediaItems}
                    </div>
                </div>
                <div className="division-line"></div>
                <div className="rights-container">
                    <FooterLogo/>
                    <p>Privacy Policy</p>
                    <p>Privacy Policy</p>
                    <p>© All rights reserved</p>
                    <p>Offer contract</p>
                    <p>Offer contract</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;