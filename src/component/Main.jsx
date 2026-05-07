import { NavLink } from "react-router";
import './Main.css';

const Main = () => {
    return (
        <>
            <div id="about"className="about">
                <h1 className="about-header">О нас</h1>
                <div className="about-content">
                    <p className="about-text">Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
    все больше людей заказывают жд билеты через интернет.</p>
                    <p className="about-text">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
    Мы расскажем о преимуществах заказа через интернет.</p>
                    <p className="about-text-bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда.
    Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                </div>
            </div>
            <div id="how-it-works" className="how-it-works">
                <div className="how-it-works-top">
                    <h1 className="how-it-works-header">Как это работает</h1>
                    <button className="how-it-works-button">Узнать больше</button>
                </div>
                <div className="how-it-works-content">
                    <div className="how-it-works-item">
                        <img className="how-it-works-icon" src="/img/how-1.png"/>
                        <div className="how-it-works-text">Удобный заказ на сайте</div>
                    </div>
                    <div className="how-it-works-item">
                        <img className="how-it-works-icon" src="/img/how-2.png"/>
                        <div className="how-it-works-text">Нет необходимости ехать в офис</div>
                    </div>
                    <div className="how-it-works-item">
                        <img className="how-it-works-icon" src="/img/how-3.png"/>
                        <div className="how-it-works-text">Огромный выбор направлений</div>
                    </div>
                </div>
            </div>
            <div id="feedback" className="feedback">
                <h1 className="feedback-header">Отзывы</h1>
                <div className="feedback-list">
                    <div className="feedback-item">
                        <img className="feedback-image" src="/img/feedback-1.png"/>
                        <div className="feedback-content">
                            <div className="feedback-author">Екатерина Вальнова</div>
                            <q className="feedback-text">Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</q>
                        </div>"
                    </div>
                    <div className="feedback-item">
                        <img className="feedback-image" src="/img/feedback-2.png"/>
                        <div className="feedback-content">
                            <div className="feedback-author">Александр Стрыкало</div>
                            <q className="feedback-text">СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</q>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
