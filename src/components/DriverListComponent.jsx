import React from 'react';
import ListComponent from './ListComponent';

const DriverList = ({ drivers }) => {
    const columns = [
        { label: 'Nombre', field: 'name', link: true },
        { label: 'Email', field: 'email' },
        { label: 'Asientos', field: 'seats' },
        { label: 'Días conducidos', field: 'daysDriven' },
        { label: 'Tiempo de espera', field: 'waitTime' }
    ];

    const paths = {
        new: '/driver_new',
        edit: '/driver_mod'
    };

    return (
        <ListComponent 
            items={drivers} 
            itemType="conductor" 
            columns={columns} 
            paths={paths} 
            newItemLabel="conductor" 
        />
    );
};

export default DriverList;
