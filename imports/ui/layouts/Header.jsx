import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HEADER extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/dashboard">Dashboard</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Clientes</button>
                        <div className="dropdown-content">
                            <Link to="/clientes">Dashboard</Link>
                            <Link to="/clientes/criar">Novo</Link>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="dropdown">
                            <button className="dropbtn">giovani_araujo</button>
                            <div className="dropdown-content">
                                <Link to="/clientes">Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
