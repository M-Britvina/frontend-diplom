import { useState } from 'react';
import CityInput from './CityInput';
import './SearchForm.css';
import { api } from '../api/api';
import { useNavigate } from 'react-router';

const SearchForm = ({handleSearchTrains}) => {
    const [idFrom, setIdFrom] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [idTo, setIdTo] = useState('');
    const [dateTo, setDateTo] = useState('');
    const navigate = useNavigate();
    
    const handleCityFromId = (id) => {
        setIdFrom(id);
    }

    const handleCityToId = (id) => {
        setIdTo(id);
    }

    const handleDateFrom = (e) => {
        setDateFrom(e.target.value);
    }

    const handleDateTo = (e) => {
        setDateTo(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.getRoutes({
                date_start: dateFrom,
                date_start_arrival: dateTo,
                from_city_id: idFrom,
                to_city_id: idTo,
                sort: 'date',
                limit: 10,
            });
            handleSearchTrains(response);
            navigate('/train-chooser');

        } catch (error) {
            console.error('Ошибка:', error);   
        }
    };

    return (
        <div className="search-ticket">
            <form action="#0" method="get" className="search-ticket-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <h2 className="form-label">Направление</h2>
                    <div className="input-row">
                        <div className="from-field">
                            <CityInput placeholder="Откуда" setSelectedId={handleCityFromId} />
                        </div>
                        <div className="change-from-where">
                            <img className="switch-button"  src={`${process.env.PUBLIC_URL}/img/switch-button.png`} alt="Поменять местами пунтк отправки и назначения"/>
                        </div>
                        <div className="where-field">
                            <CityInput placeholder="Куда" setSelectedId={handleCityToId} />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <h2 className="form-label">Дата</h2>
                    <div className="input-row">
                        <div className="from-date-choice">
                            <input id="date-from" type="date"
                                className="search-form-input input-calendar-icon" 
                                placeholder="ДД/ММ/ГГ"
                                value={dateFrom}
                                onChange={handleDateFrom}
                            />
                        </div>
                        <div className="to-date-choice">
                            <input id="date-to" type="date"
                                className="search-form-input input-calendar-icon"
                                placeholder="ДД/ММ/ГГ" 
                                value={dateTo}
                                onChange={handleDateTo}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row form-row-right">
                    <button type="submit" className="search-submit-button">Найти билеты</button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;