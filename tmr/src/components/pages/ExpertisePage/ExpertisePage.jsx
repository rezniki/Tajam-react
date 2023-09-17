import './Style.css';
import Computer from '../../../img/computer.png';
import Art from '../../../img/art.png';
import Phone from '../../../img/phone.png';
import Cheese from '../../../img/cheese.png';
import Console from '../../../img/console.png';
import Heart from '../../../img/heart.png';

const Expertise = () => {
    return (
        <section className="expertise__content">
            <h1 className="expertise__title">expertise</h1>
            <p className="expertise__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem numquam ducimus esse maiores facere perspiciatis, 
                quo provident corporis laboriosam, 
                laborum necessitatibus tempora nihil at veritatis ab aspernatur sint, 
                harum temporibus
            </p>
            <div className="expertise__item__card">
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Computer} alt="Computer"/>
                    <h1 className="expertise__item__title">web design & development</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Art} alt="Art"/>
                    <h1 className="expertise__item__title">branding identity</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Phone} alt="Art"/>
                    <h1 className="expertise__item__title">mobile app</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
            </div>    
            <div className="expertise__item__card">
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Cheese} alt="Cheese"/>
                    <h1 className="expertise__item__title">search engine optimization</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Console} alt="Console"/>                
                    <h1 className="expertise__item__title">mobile app</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
                <div className="expertise__item">
                    <img className="expertise__item__image" src={Heart} alt="Heart"/>                    
                    <h1 className="expertise__item__title">made with love</h1>
                    <p className="expertise__item__text">
                        This is Photoshop's version of Lorem ipsum. 
                        Proin gravida nibh vel auctor aliquet Aenean.
                    </p>
                </div>
            </div>    
        </section>
    );
}

export default Expertise