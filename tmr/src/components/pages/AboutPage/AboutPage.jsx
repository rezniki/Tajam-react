import './Style.css';
import pyraMid from '../../../img/symbol.png';

const About = () => {
    return (
        <section className="our__story__content container">
            <img className="our__story__symbol" src={pyraMid} alt="Symbol"/>
            <div className="our__story__main__text">
                <h1 className="our__story__title">our story</h1>
                <p className="our__story__text">
                    This is Photoshop's of lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non obcaecati fuga impedit quos praesentium officiis adipisci aliquid saepe odit, expedita dolor, fugiat in voluptatem inventore? 
                    Nostrum reiciendis tenetur vel laboriosam?
                </p>
                <p className="our__story__subtext">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquid vel corrupti facilis! 
                    Quam, beatae earum ipsa qui saepe, quia expedita magni culpa animi nemo repellendus quod asperiores veritatis cumque tempore.
                </p>
                <p className="our__story__button">learn more</p>
            </div>    
        </section>
    );
}

export default About