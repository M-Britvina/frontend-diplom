import './FormInput.css';

const FormInput = ({label, name, isValid, textError, value, handleChange, type = "text"}) => {
    return (
        <label className="form-input-label">
            <div>{label}</div>
            <input name={name} className="form-input-input" type={type} value={value} required onChange={handleChange}></input>
            <div className='form-input-error' hidden={isValid}>{textError}</div>
        </label>
    )
}

export default FormInput;