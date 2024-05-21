import React from 'react';

// Componente de botón genérico
const PrimaryButton = ({ path, className, iconClass, label }) => {
    return (
        <a href={path} className='primaryButton'>
            <i className={iconClass}></i>
            {label}
        </a>
    );
};

export default PrimaryButton;