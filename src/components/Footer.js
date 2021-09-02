import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (

        <footer className="page-footer font-small blue pt-4 bg-dark">

            <div className="container-fluid text-center text-md-left">

                <div className="row">

                    {/* /////////////// Prima Colonna //////////// */}
                    <div className="col-md-4 mt-md-0 mt-3">


                        <h5 className="text-uppercase">Keep in Touch!</h5>
                        <p id="footer-p">Address: Rome, but love to travel <FontAwesomeIcon icon={faSmile} /> </p>
                        <p id="footer-p">Phone: +393493318799</p>
                        <p id="footer-p">Email: flavio.digiovanni@outlook.com</p>

                    </div>

                    {/* /////////////// Seconda Colonna //////////////// */}
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Website Map</h5>

                        <div className="row">
                            <div className="col-md-6 mb-md-0 mb-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#scroll-about">
                                            About Me
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#scroll-curriculum">
                                            Curriculum
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 mb-md-0 mb-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#scroll-studies">
                                            Studies
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#scroll-portfolio">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" className="btn-floating btn-tw mx-1" href="#scroll-form">
                                            Contacts
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* //////////// Terza Colonna ///////////////// */}
                    <div className="col-md-4 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Social</h5>

                        <ul className="list-unstyled">
                            <li className="list-inline-item">
                                <a className="btn-floating btn-tw mx-1"
                                    href="https://www.facebook.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-tw mx-1"
                                    href="https://twitter.com/" target="_blank">
                                    <FontAwesomeIcon icon={faTwitterSquare}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-li mx-1"
                                    href="https://www.linkedin.com/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">
                    Developed by me! © 2021 Copyright:
                    <a href="#" > Flavio Di Giovanni - FLOW WEB DEV</a>
                </div>

            </div>
        </footer >
    )
}

export default Footer

