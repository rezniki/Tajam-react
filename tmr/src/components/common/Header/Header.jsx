import './Style.css';

const Header = (props) => {
    return (
        <header class="header">
            <div class="header__container container">
                <img class="header__logo" src="img/logo.png" alt="Logo"></img>
                <nav class="header__menu">
                    <a class="header__link" href='/'>{props.home}</a>
                    <a class="header__link" href='/about'>{props.about}</a>
                    <a class="header__link" href='/expertise'>{props.expertise}</a>
                    <a class="header__link" href='/teams'>{props.teams}</a>
                    <a class="header__link" href='/works'>{props.works}</a>
                    <a class="header__link" href='/people'>{props.people}</a>
                    <a class="header__link" href='/contact'>{props.contact}</a>
                </nav>
            </div>
        </header>
    );
}

export default Header