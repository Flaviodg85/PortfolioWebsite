import React from 'react'
import comingSoon from "../img/coming-soon.png";
import actual from "../img/this.png";

const Portfolio = () => {
    return (
        <div className="container">

            <div id="studies-row" className="row">
                <h2 id="studies-h2">Portfolio</h2>
            </div>

            <div className="row">
                <div className="col offset-col-sm-3">{/*CONTROLLA */}

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">

                        {/* <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol> */}

                        <div class="carousel-inner" >
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={actual} alt="This site" />
                                <h5 className="text-center" style={{ color: "orange", marginTop: "2%" }}>You are on it!</h5>
                                <p className="text-center" style={{ marginBottom: "2%" }}>This is the first complete work I developed, made with React and Bootstrap</p>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={comingSoon} alt="Coming soon" />
                                <h5 className="text-center" style={{ color: "orange", marginTop: "2%" }}>Coming Soon</h5>
                                <p className="text-center" style={{ marginBottom: "2%" }}>I'm working on it!</p>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>

                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div> {/*closing row */}
        </div> /*closing container */
    )
}

export default Portfolio
