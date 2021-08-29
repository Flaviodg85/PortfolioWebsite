import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (

        <footer class="page-footer font-small blue pt-4">

            <div class="container-fluid text-center text-md-left">

                <div class="row">

                    {/* /////////////// Prima Colonna //////////// */}
                    <div class="col-md-4 mt-md-0 mt-3">


                        <h5 class="text-uppercase">Keep in Touch!</h5>
                        <p>Address: Rome, but love to travel <FontAwesomeIcon icon={faSmile} /> </p>
                        <p>Phone: +39/3493318799</p>
                        <p>Email: flaviodg85@gmail.com</p>

                    </div>

                    {/* /////////////// Seconda Colonna //////////////// */}
                    <div class="col-md-4 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Website Map</h5>

                        <div class="row">
                            <div class="col-md-6 mb-md-0 mb-3">
                                <ul class="list-unstyled">
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            About Me
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            Curriculum
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 mb-md-0 mb-3">
                                <ul class="list-unstyled">
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            Studies
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a id="link-footer" class="btn-floating btn-tw mx-1" href="#">
                                            Contacts
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* //////////// Terza Colonna ///////////////// */}
                    <div class="col-md-4 mb-md-0 mb-3">

                        <h5 class="text-uppercase">Social</h5>

                        <ul class="list-unstyled">
                            <li class="list-inline-item">
                                <a class="btn-floating btn-tw mx-1"
                                    href="https://www.facebook.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn-floating btn-tw mx-1"
                                    href="https://twitter.com/" target="_blank">
                                    <FontAwesomeIcon icon={faTwitterSquare}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn-floating btn-li mx-1"
                                    href="https://www.linkedin.com/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin}
                                        style={{ fontSize: "3rem" }}
                                    />
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#" > FLOW WEB DEV</a>
                </div>

            </div>
        </footer >
    )
}

export default Footer

