import React, { Component } from 'react';
import logo from '../../static/logo/logo_horizontal.svg';
import './Navigation.scss';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends Component {
    render() { 
        return (
                <nav className="navigation navbar navbar-expand navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} height="40" width="auto" alt="The Pokémon Card Game Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/grass" className="nav-link" activeClassName="active">Grass</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}
 
export default Navigation;