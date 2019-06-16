import React, { Component } from 'react';
import logo from '../../static/logo/logo_icon.png';

class Footer extends Component {
    render() { 
        return (
            <footer className="bg-dark text-light pt-3 pb-3 d-flex justify-content-center align-items-center flex-column">
                <img src={logo} className="mb-2" height="40" width="auto" alt="The Pokemon Card Game logo" />
                <p className="m-0">
                    Copyright &copy; Pokemon Card Game
                </p>
            </footer>
        );
    }
}
 
export default Footer;