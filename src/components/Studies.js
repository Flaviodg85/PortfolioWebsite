import React from 'react'
import java from "../img/java.png";
import course from "../img/courses.png";
import statua from "../img/statua.png";

const Studies = () => {
    return (
        <div id="scroll-studies" className="container-fluid">
            <p id="fake-for-scroll">fake-for-scroll</p>

            <div id="studies-row" className="row">
                <h2 id="studies-h2">Studies</h2>
            </div>

            <div className="row">

                <div className="col-md-4 col-sm-12">

                    <div id="studies-picture" class="card">
                        <img class="card-img-top" src={statua} alt="la-sapienza"></img>
                        <div class="card-body">
                            <h5 class="card-title">University</h5>
                            <p class="card-text">Despite my career as programmer, I have a degree in Literature and Philosophy
                                at La Sapienza University in Rome. </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">

                    <div id="studies-picture" class="card">
                        <img class="card-img-top" src={java} alt="java"></img>
                        <div class="card-body">
                            <h5 class="card-title">Java Full Stack Developer Course</h5>
                            <p class="card-text">500 hours of studying and 240 hours of stage about Java, front-end, back-end,
                                database and more. Was tough but fun!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">

                    <div id="studies-picture" class="card">
                        <img class="card-img-top" src={course} alt="courses"></img>
                        <div class="card-body">
                            <h5 class="card-title">Other Courses</h5>
                            <p class="card-text">"Fundamentals of programming"(in Python) at Toronto University
                                & "Html, Css, Javascript for Web Developer" at Johns Hopkins University</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="studies-row" className="row">
                <h3 id="studies-h2">Technologies</h3>
            </div>

            <div id="studies-last-row" className="row">
                <div id="studies-img" className="col-md-2 offset-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" alt="java" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="js" />
                </div>
                <div id="studies-img" className="col-md-2 offset-md-2 col-4">
                    <img src="https://img.icons8.com/fluency/96/000000/mysql-logo.png" alt="sql" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/spring-logo.png" alt="spring" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="react" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap" />
                </div>
                <div id="studies-img" className="col-md-2 offset-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/python--v1.png" alt="python" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/nolan/96/java-eclipse.png" alt="eclipse" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png" alt="vscode" />
                </div>
                <div id="studies-img" className="col-md-2 col-4">
                    <img src="https://img.icons8.com/fluency/96/000000/github.png" alt="git" />
                </div>
            </div>

            {/* <div className="row">
                
            </div>

            <div  className="row">
                
            </div> */}


        </div >//chiusura container
    )
}

export default Studies
