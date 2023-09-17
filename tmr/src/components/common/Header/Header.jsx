import './Style.css';
import myImg from '../../../img/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <img className='header__logo' src={myImg} alt="Logo"/>
                <nav className='header__menu'>
                    <a className='header__link' href='/'>home</a>
                    <a className='header__link' href='/about'>about</a>
                    <a className='header__link' href='/expertise'>expertise</a>
                    <a className='header__link' href='/teams'>teams</a>
                    <a className='header__link' href='/works'>works</a>
                    <a className='header__link' href='/people'>people say</a>
                    <a className='header__link' href='/contact'>contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header