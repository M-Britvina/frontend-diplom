import { useState } from 'react';
import './Passengers.css';
import { useNavigate } from 'react-router';

const Passengers = ({handlePassenger}) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        thirdName: '',
        birthDate: '',
        serial: '',
        number: '',
    });

    const errors = {
        name: formData.name.length > 0,
        lastName: formData.lastName.length > 0,
        thirdName: formData.thirdName.length > 0,
        birthDate: formData.birthDate.length > 0,
        serial: formData.serial.length === 4,
        number: formData.number.length === 6,
    }
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = Object.values(errors).every(value => value === true);

    const handleNext = (e) => {
        e.preventDefault();
        
        if (isFormValid) {
            handlePassenger(formData);
            navigate('/payment');
        }
    }

    return (
        <div className="passengers">
            <form className="passenger" onSubmit={handleNext}>
                <div className='passenger-header'>
                    Пассажир
                </div>
                <div className="passenger-data">
                    <label className="passenger-label">
                        <input name="type" className="passenger-input" type="text" value="Взрослый" disabled></input>
                    </label>
                </div>
                <div className="passenger-data">
                    <label className="passenger-label">
                        <div>Фамилия</div>
                        <input name="lastName" className="passenger-input" type="text" value={formData.lastName} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.lastName}>Поле не заполнено</div>
                    </label>
                    <label className="passenger-label">
                        <div>Имя</div>
                        <input name="name" className="passenger-input" type="text" value={formData.name} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.name}>Поле не заполнено</div>
                    </label>
                    <label className="passenger-label">
                        <div>Отчество</div>
                        <input name="thirdName" className="passenger-input" type="text" value={formData.thirdName} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.thirdName}>Поле не заполнено</div>
                    </label>
                    <label className="passenger-label">
                        <div>Дата рождения</div>
                        <input name="birthDate" className="passenger-input" type="date" value={formData.birthDate} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.birthDate}>Поле не заполнено</div>
                    </label>
                </div>
                <div className="passenger-identity">
                    <label className="passenger-label">
                        <div>Тип докуммента</div>
                        <input name="documentType" className="passenger-input" type="calendar" value="Паспорт РФ" disabled></input>
                    </label>
                    <label className="passenger-label">
                        <div>Серия</div>
                        <input name="serial" className="passenger-input" type="number" value={formData.serial} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.serial}>Серия должна содержать 4 цифры</div>
                    </label>
                    <label className="passenger-label">
                        <div>Номер</div>
                        <input name="number" className="passenger-input" type="number" value={formData.number} required onChange={handleChange}></input>
                        <div className='passenger-error' hidden={errors.number}>Номер должен содержать 6 цифр</div>
                    </label>
                </div>
            </form>

            <div className='passenger-footer'>
                <button className='passenger-button' onClick={handleNext} disabled={!isFormValid}>Далее</button>
            </div>
        </div>
    )
}

export default Passengers;
