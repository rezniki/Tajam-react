import './Style.css';
import White from '../../../img/white.png';

const Teams = () => {
    return (
        <section className="amazing">
        <h1 className="amazing__title">meet our amazing team</h1>
        <p className="amazing__text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        <div className="amazing__items">
            <div className="amazing__item">
                <img className="amazing__image" src={White} alt="People"/>
                <p className="amazing__name">semf ucuk</p>
                <p className="amazing__job">ceo & founder</p>
            </div>
            <div className="amazing__item">
                <img className="amazing__image" src={White} alt="People"/>                
                <p className="amazing__name">dik adalin</p>
                <p className="amazing__job">engineering</p>
            </div>
            <div className="amazing__item">
                <img className="amazing__image" src={White} alt="People"/>
                <p className="amazing__name">jeng kol</p>
                <p className="amazing__job">designer</p>
            </div>
            <div className="amazing__item">
                <img className="amazing__image" src={White} alt="People"/>
                <p className="amazing__name">pet romak</p>
                <p className="amazing__job">marketing</p>
            </div>
        </div>
        <p className="amazing__subtext">Become part of our dream team, let's join us!</p>
        <p className="amazing__button">we are hiring</p>
    </section>
    );
}
export default Teams