import './Style.css';
import PlayIcon from '../../../img/playicon.png'; 

const Watch = () => {
    return (
        <section className="watch__our__story">
            <img className="watch__playicon" src={PlayIcon} alt="Playicon"/>
            <p className="watch__our__story__text">watch our story</p>
        </section>
    );
}

export default Watch