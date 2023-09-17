import './Style.css';
import Logo from '../../../img/logo.png';
import Nav from '../../../img/nav.png'
import PhoneNumber from '../../../img/phonenumber.png';
import Search from '../../../img/search.png';
import Facebook from '../../../img/facebook2.png';
import Twitter from '../../../img/twitter1.png';
import Driibble from '../../../img/dribbble.png';
import Instagram from '../../../img/instagram.png';
import Google from '../../../img/google.png';
import Youtube from '../../../img/youtube.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content__tajam">
                <div className="footer__tajam">
                    <img className="footer__logo" src={Logo} alt="Logo"/>
                    <p className="footer__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Qui laborum tenetur iure est commodi possimus, quibusdam impedit eos odit sit!
                    </p>
                </div>
                <div className="footer__address">
                    <p className="footer__our__title">our studio</p>
                    <div className="footer__our__address">
                        <img className="footer__nav" src={Nav} alt="Nav"/>
                        <p className="footer__our__address__text">
                            Ruko cucruk, JL. Radio luar dalem
                            jos No.12-13, Kalideres - Jakarta Barat
                            11480 - Indonesia   
                        </p>    
                    </div>
                    <div className="footer__our__phonenumber">
                        <img className="footer__phonenumber__image" src={PhoneNumber} alt="Phonenumber"/>
                        <p className="footer__phonenumber">(+62) 21-2224 3333</p>
                    </div>   
                </div>
                <div className="footer__stay">
                    <p className="footer__stay__title">stay in touch</p>
                    <img className="footer__search" src={Search} alt="Search"/>
                    <div className="footer__icons">
                        <img className="footer__icon__facebook" src={Facebook} alt="Facebook"/>
                        <img className="footer__icon__twitter" src={Twitter} alt="Twitter"/>
                        <img className="footer__icon" src={Driibble} alt="Driibble"/>
                        <img className="footer__icon" src={Instagram} alt="Instagram"/>
                        <img className="footer__icon" src={Google} alt="Google"/>
                        <img className="footer__icon__youtube" src={Youtube} alt="Youtube"/>
                    </div>    
                </div>   
            </div> 
            <div className="footer__tajam__creative">
                <div className="footer__help">
                    <p className="footer__subtext__help">help</p>
                    <p className="footer__subtext">terms & condition</p>
                    <p className="footer__subtext">privacy</p>
                </div>
                <p className="footer__creative__text">Copyright 2015 Tajam Creative</p>
            </div>
        </footer>
    );
}

export default Footer