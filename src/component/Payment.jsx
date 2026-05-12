import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router";
import './Payment.css';

const Payment = ({handlePayment}) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        thirdName: '',
        phone: '',
        email: '',
        online: false,
        cash: false,
    });

    const errors = {
        name: formData.name.length > 0,
        lastName: formData.lastName.length > 0,
        thirdName: formData.thirdName.length > 0,
        phone: /^(\+7|7|8)?\d{10}$/.test(formData.phone),
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
        payment: (formData.online && !formData.cash) || (!formData.online && formData.cash),
    }
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const isFormValid = Object.values(errors).every(value => value === true);

    const handleNext = (e) => {
        e.preventDefault();
        
        if (isFormValid) {
            handlePayment(formData);
            navigate('/order-confirmation');
        }
    }

    return (
        <div className="payments">
            <form className="payment" onSubmit={handleNext}>
                <div className='payment-header'>
                    Персональные данные
                </div>
                <div className="payment-data">
                    <FormInput label="Фамилия" name="lastName" value={formData.lastName} handleChange={handleChange} isValid={errors.lastName} textError="Поле не заполнено"/>
                    <FormInput label="Имя" name="name" value={formData.name} handleChange={handleChange} isValid={errors.name} textError="Поле не заполнено"/>
                    <FormInput label="Отчество" name="thirdName" value={formData.thirdName} handleChange={handleChange} isValid={errors.thirdName} textError="Поле не заполнено"/>
                </div>
                <div className="payment-data">
                    <FormInput label="Телефон" name="phone" value={formData.phone} handleChange={handleChange} isValid={errors.phone} textError="Телефон должен быть в формате +7xxxxxxxxxx" type="tel"/>
                </div>
                <div className="payment-data">
                    <FormInput label="Электронная почта" name="email" value={formData.email} handleChange={handleChange} isValid={errors.email} textError="Неверный формат почты" type="email"/>
                </div>
                <div className='payment-header'>
                    Способ оплаты
                </div>
                <div className="payment-data">
                    <label className="checkbox-label">
                        <input className="checkbox-value" type="checkbox" name="online" value={formData.online} checked={formData.online} onChange={handleChange} />
                        Онлайн
                    </label>
                    <label className="checkbox-label">
                        <input className="checkbox-value" type="checkbox" name="cash" value={formData.cash} checked={formData.cash} onChange={handleChange} />
                        Наличные
                    </label>
                    <div className='form-input-error' hidden={errors.payment}>Выберите один способ оплаты</div>
                </div>
            </form>

            <div className='payment-footer'>
                <button className='payment-button' onClick={handleNext} disabled={!isFormValid}>Купить билеты</button>
            </div>
        </div>
    )
}

export default Payment;
