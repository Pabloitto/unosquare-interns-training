import React from 'react'

export default ({ label, placeholder, type, value, onChange = () => {} }) => {
    const handleChange = ({target}) => {
        const value = target.value;
        onChange(value)
    };
    return (
        <div>
            <label>{label}</label>
            <input
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
                value={value} />
        </div>
    )
}
