import './Header.css';
import SearchForm from './SearchForm';

const Header = ({handleSearchTrains}) => {
    return (
        <header className="welcome">
            <div className="header-top">
                <div className="header-top-logo">Лого</div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a className="menu-item-link" href={`${process.env.PUBLIC_URL}/#about`}>О нас</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href={`${process.env.PUBLIC_URL}/#how-it-works`}>Как это работает</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href={`${process.env.PUBLIC_URL}/#feedback`}>Отзывы</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href={`${process.env.PUBLIC_URL}/#contacts`}>Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-bottom">
                <div className="slogan">Вся жизнь - <strong>путешествие!</strong></div>
                <SearchForm handleSearchTrains={handleSearchTrains}/>
            </div>
        </header>
    );
}

export default Header;
