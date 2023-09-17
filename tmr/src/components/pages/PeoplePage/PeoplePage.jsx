import './Style.css';
import Back from '../../../img/back.png';
import People_1 from '../../../img/1.png';
import People_2 from '../../../img/2.png';
import People_3 from '../../../img/3 - active.png';
import People_4 from '../../../img/4.png';
import People_5 from '../../../img/5.png';
import Forward from '../../../img/forward.png';

const People = () => {
    return (
        <section className="team__main">
            <p className="team__symbol">""</p>
            <p className="team__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Commodi eligendi cumque aliquid voluptate magni laboriosam, a ea dolor quibusdam consectetur, ipsa tempore autem provident placeat adipisci perferendis? 
                Cupiditate cum dolor, quos molestias ipsum ea quasi, delectus facere non molestiae temporibus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Modi non, molestiae quae earum magnam quis placeat delectus quos voluptates voluptas eveniet nemo, rem incidunt maxime, omnis ipsa vero illo blanditiis?
            </p>
            <p className="team__name">jane galadriel</p>
            <p className="team__job">ceo tengkurep</p>
            <div className="team__images">
                <img className="team__icon" src={Back} alt="Back"/>
                <img className="team__image" src={People_1} alt="People_1"/>
                <img className="team__image" src={People_2} alt="People_2"/>
                <img className="team__image" src={People_3} alt="People_3"/>
                <img className="team__image" src={People_4} alt="People_4"/>
                <img className="team__image" src={People_5} alt="People_5"/>
                <img className="team__icon" src={Forward} alt="Forward"/>
            </div>
        </section>
    );
}

export default People