import React from 'react';
import { TiUser } from 'react-icons/ti';
import { MdGroups } from "react-icons/md";
import { FaCalendar, FaBell } from "react-icons/fa";
import CardComponent from './CardComponent';

const Main = ({ isAdmin }) => {
    return (
        <div className="container">
            {isAdmin && (
                <>
                    <CardComponent 
                        route="/conductores" 
                        icon={<TiUser style={{ fontSize: '8rem' }} />} 
                        name="Usuarios" 
                    />
                    <CardComponent 
                        route="/timeTable" 
                        icon={<FaCalendar style={{ fontSize: '8rem' }} />} 
                        name="Cuadrantes" 
                    />
                </>
            )}
            <CardComponent 
                route="/groups" 
                icon={<MdGroups style={{ fontSize: '8rem' }} />} 
                name="Grupos" 
            />
            <CardComponent 
                route="/notify" 
                icon={<FaBell style={{ fontSize: '8rem' }} />} 
                name="Notificaciones" 
            />
        </div>
    );
};

export default Main;
