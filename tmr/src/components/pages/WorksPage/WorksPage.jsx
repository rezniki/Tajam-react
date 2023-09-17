import './Style.css';
import Forward from '../../../img/forward.png';
import BottomBlocks from '../../../img/Bottomblocks.png';
import TopBlocks from '../../../img/Topblocks.png';

const Works = () => {
    return (
        <section className="works">
            <div className="works__content">
                <h1 className="works__title">our works</h1>
                <p className="works__text">See All Project in dribbble</p>
                <img className="works__image" src={Forward} alt="Back"/>
            </div>
            <img className="works__image_1" src={BottomBlocks} alt="Bottomblocks"/>
            <img className="works__image_2" src={TopBlocks} alt="Topblocks"/>
            <p className="works__button">load more</p>
        </section>
    );
}

export default Works