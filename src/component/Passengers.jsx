import { useState } from 'react';
import './Passengers.css';
import { useNavigate } from 'react-router';
import FormInput from './FormInput';

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
                    <FormInput label="Фамилия" name="lastName" value={formData.lastName} handleChange={handleChange} isValid={errors.lastName} textError="Поле не заполнено"/>
                    <FormInput label="Имя" name="name" value={formData.name} handleChange={handleChange} isValid={errors.name} textError="Поле не заполнено"/>
                    <FormInput label="Отчество" name="thirdName" value={formData.thirdName} handleChange={handleChange} isValid={errors.thirdName} textError="Поле не заполнено"/>
                    <FormInput label="Дата рождения" name="birthDate" value={formData.birthDate} handleChange={handleChange} isValid={errors.birthDate} textError="Поле не заполнено" type="date"/>
                </div>
                <div className="passenger-identity">
                    <label className="passenger-label">
                        <div>Тип докуммента</div>
                        <input name="documentType" className="passenger-input" type="calendar" value="Паспорт РФ" disabled></input>
                    </label>
                    <FormInput label="Серия" name="serial" value={formData.serial} handleChange={handleChange} isValid={errors.serial} textError="Серия должна содержать 4 цифры" type="number"/>
                    <FormInput label="Номер" name="number" value={formData.number} handleChange={handleChange} isValid={errors.number} textError="Номер должен содержать 6 цифр" type="number"/>
                </div>
            </form>

            <div className='passenger-footer'>
                <button className='passenger-button' onClick={handleNext} disabled={!isFormValid}>Далее</button>
            </div>
        </div>
    )
}

export default Passengers;
