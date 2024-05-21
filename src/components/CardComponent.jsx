import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiUser } from 'react-icons/ti';

const CardComponent = ({ route, icon, name }) => {
    return (
        <Link to={route} className="card">
            {icon}
            <h3>{name}</h3>
        </Link>
    );
};

CardComponent.propTypes = {
    route: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
};

export default CardComponent;
