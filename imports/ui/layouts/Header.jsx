import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HEADER extends Component {
    render() {
        return (
            <div>
                <div className="navbar-nav">
                    <ul className="navbar-ul">
                        <li className="navbar-link">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/clientes">Clientes</Link>
                        </li>
                        <div className="right-side">
                            <li className="navbar-link">
                                <a href="/">giovani_araujo</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
