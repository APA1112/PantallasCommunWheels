import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Main from './components/MainComponent';
import DriverList from './components/DriverListComponent';

const App = () => {
    const [drivers, setDrivers] = useState([
        { id: 1, name: 'John', lastName: 'Doe', email: 'john@example.com', seats: 4, daysDriven: 10, waitTime: '1 hora' },
        { id: 2, name: 'Jane', lastName: 'Smith', email: 'jane@example.com', seats: 4, daysDriven: 5, waitTime: '2 horas' },
        // Agrega más datos variados si es necesario
    ]);

    const isAdmin = true;

    return (
        <Router>
            <Navbar user={{ name: 'Admin', email: 'admin@example.com' }} />
            <Routes>
                <Route path="/" element={<Main isAdmin={isAdmin} />} />
                <Route
                    path="/conductores"
                    element={<DriverList drivers={drivers} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
