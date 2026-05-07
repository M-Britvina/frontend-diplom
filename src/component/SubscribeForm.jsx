import React, { useState } from 'react';
import './SubscribeForm.css';
import { api } from '../api/api';

const SubscribeForm = ({openModal}) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        api.subscribe(email);
        console.log('Отправлен email:', email);
        openModal(false, (<><p className="modal-text">Подписка оформлена</p>
            <p className="modal-text">Новости будут приходить на почту {email}.</p></>));

        setEmail('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <form className="subscribe-form" onSubmit={handleSubmit}>
            <label className="subscribe-form-header">
                <div>Будьте в курсе событий</div>
                <input id="email" className="subscribe-form-input"
                    placeholder="e-mail"
                    required
                    type="email"
                    value={email}
                    onChange={handleEmailChange}/>
            </label>
            <button type="submit" className="subscribe-form-submit">ОТПРАВИТЬ</button>
        </form>
    );
}

export default SubscribeForm;