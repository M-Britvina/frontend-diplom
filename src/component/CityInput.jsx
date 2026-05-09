import { useState, useEffect, useRef, useCallback } from 'react';
import { api } from '../api/api';
import './CityInput.css';

const CityInput = ({placeholder, setSelectedId}) => {
    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [write, setWrite] = useState(true);
    const wrapperRef = useRef(null);

    const fetchCities = useCallback(async (name) => {
        if (!name.trim() || !write) {
            setCities([]);
            setShowDropdown(false);
            return;
        }

        setLoading(true);
        try {
            const response = await api.getCities(name);
            setCities(response);
            setShowDropdown(response.length > 0);
        } catch (error) {
            console.error('Ошибка:', error);
            setCities([]);
            setShowDropdown(false);
        } finally {
            setLoading(false);
        }
    }, [write]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputValue && write) {
                fetchCities(inputValue);
            } else {
                setCities([]);
                setShowDropdown(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, write, fetchCities]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSelectedId(null);
        setWrite(true);
    };

    const handleCitySelect = (city) => {
        setInputValue(city.name);
        setSelectedId(city._id);
        setShowDropdown(false);
        setCities([]);
        setWrite(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <input
                id="location-from" 
                type="text" 
                className="search-form-input input-location-icon" 
                placeholder={placeholder} 
                required
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => inputValue && cities.length > 0 && setShowDropdown(true)}
                autoComplete="off"
            />
            
            {loading && (
                <div className="dropdown-loading">Загрузка...</div>
            )}
          
            {showDropdown && cities.length > 0 && (
                <ul className="dropdown-list">
                    {cities.map((city) => (
                        <li
                            key={city._id}
                            onClick={() => handleCitySelect(city)}
                            className="dropdown-item"
                        >
                        {city.name}
                        </li>
                    ))}
                </ul>
            )}
          
            {showDropdown && cities.length === 0 && !loading && inputValue && (
                <div className="no-results">Города не найдены</div>
            )}
        </>
    );
}

export default CityInput;