import './Header.css';

const Header = () => {
    return (
        <header className="welcome">
            <div className="header-top">
                <div className="header-top-logo">Лого</div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a className="menu-item-link" href="/#about">О нас</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href="/#how-it-works">Как это работает</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href="/#feedback">Отзывы</a></li>
                        <li className="menu-item">
                            <a className="menu-item-link" href="/#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-bottom">
                <div className="slogan">Вся жизнь - <strong>путешествие!</strong></div>
                <div className="search-ticket">
                    <form action="#0" method="get" className="search-ticket-form">
                        <div className="form-row">
                            <h2 className="form-label">Направление</h2>
                            <div className="input-row">
                                <div className="from-field">
                                    <input id="location-from" type="text" className="search-form-input input-location-icon" placeholder="Откуда" required />
                                </div>
                                <div className="change-from-where">
                                    <img className="switch-button" src="/img/switch-button.png" alt="Поменять местами пунтк отправки и назначения"/>
                                </div>
                                <div className="where-field">
                                    <input id="location-to" type="text" className="search-form-input input-location-icon" placeholder="Куда" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <h2 className="form-label">Дата</h2>
                            <div className="input-row">
                                <div className="from-date-choice">
                                    <input id="date-from" type="text" className="search-form-input input-calendar-icon" placeholder="ДД/ММ/ГГ" />
                                </div>
                                <div className="to-date-choice">
                                    <input id="date-to" type="text" className="search-form-input input-calendar-icon" placeholder="ДД/ММ/ГГ" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row form-row-right">
                            <button type="submit" className="search-submit-button">Найти билеты</button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
