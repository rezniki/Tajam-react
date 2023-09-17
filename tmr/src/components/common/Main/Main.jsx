import './Style.css';

const Main = () => {
    return (
        <section className="main__container">
            <h1 className="main__title">We Are Awesome Creative Agency</h1>
            <p className="main__text">
                This is Photoshop's of lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime veniam vitae porro deserunt quos! 
                Quod nesciunt ducimus nulla natus dicta cupiditate facere, esse dolorem dignissimos, culpa nihil incidunt rem soluta?
            </p>
            <p className="main__button">learn more</p>
            <div className="main__circle">
                <div className="main__circles"></div>
                <div className="main__circles"></div>
                <div className="main__circles"></div>
                <div className="main__circles"></div>
            </div>
        </section>
    );
}

export default Main