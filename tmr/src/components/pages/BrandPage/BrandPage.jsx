import './Style.css';
import Zara from '../../../img/Zara_Logo.png';
import Mango from '../../../img/Logo_of_Mango_new.png';
import NewYork from '../../../img/1280px-Barneys_New_York_Logo.png';
import Gucci from '../../../img/1280px-Gucci_Logo.png';
import Calvin from '../../../img/Calvin_klein_logo.png';
import Nike from '../../../img/1280px-Logo_NIKE.png';
import Converse from '../../../img/Converse_logo.png';
import Puma from '../../../img/Puma_Logo.png';
import Levis from '../../../img/1280px-Levis_logo.png';
import Bill from '../../../img/Billabong.png';


const Brand = () => {
    return (
        <section className="give__client">
        <div className="give__good__news">
            <h1 className="give__news__title">give us a good news</h1>
            <p className="give__news__name">Name</p>
            <p className="give__news__email">Email</p>
            <p className="give__news__subject">Subject</p>
            <p className="give__news__message">Your Message</p>
            <p className="give__news__button">Submit</p>
        </div>
        <div className="happy__client">
            <h1 className="happy__title">our happy client</h1>
            <div className="happy__logo">
                <img className="happy__image__zara" src={Zara} alt="Zara"/>
                <img className="happy__image__mango" src={Mango} alt="Mango"/>
            </div>
            <div className="happy__logo">
                <img className="happy__image__new" src={NewYork} alt="New_York"/>
                <img className="happy__image__gucci" src={Gucci} alt="Gucci"/>
            </div>
            <div className="happy__logo">
                <img className="happy__image__calvin" src={Calvin} alt="Calvin"/>
                <img className="happy__image__nike" src={Nike} alt="Nike"/>
            </div>
            <div className="happy__logo">
                <img className="happy__image__converse" src={Converse} alt="Converse"/>
                <img className="happy__image__puma" src={Puma} alt="Puma"/>
            </div>
            <div className="happy__logo">
                <img className="happy__image__levis" src={Levis} alt="Levis"/>
                <img className="happy__image__bill" src={Bill} alt="Bill"/>
            </div>
        </div>
    </section>
    );
}

export default Brand