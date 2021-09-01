import React from 'react';
import logo from '../img/logo.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top ">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scroll-about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scroll-curriculum">Curriculum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scroll-studies">Studies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scroll-portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scroll-form">Contacts</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
