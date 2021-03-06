import React from 'react'

export default ({ children, submitButtonText, onSubmit = () => {} }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit();
    };
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <button>{submitButtonText}</button>
        </form>
    )
}
