import React from 'react'
import profile from '../img/profile.png'

const AboutMe = () => {
    return (
        <div id="scroll-about" className="container-fluid action2">
            <p id="fake-for-scroll">fake-for-scroll</p>
            <div className="row">

                <div id="about-img" className="col-md-6 d-none d-md-block">
                    <img src={profile} alt="profile"
                        className="img-fluid" />
                </div>

                <div className="col-md-6 col-sm-12">
                    <h2 id="aboutH">About Me</h2>
                    <p id="about-p">
                        Hi! My name is Flavio and I am a Full Stack Web Developer!
                        In my working career I did different jobs around the world. Programming has always been a passion
                        of mine but I have never
                        had the opportunity to study it properly. Recently I decided to take some
                        time off from work and started to study as a Java Full Stack Web Developer.
                        I attended a course in Rome, organized by the Lazio Region, of 740 hours between studying and
                        working as intern. We studied the fundamentals of programming
                        plus some advanced topics, such as Java Enterprise Edition. On top of that, I also attended a
                        couple of online University courses: the first one by the University of Toronto and the second one by
                        the Johns Hopkins University.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
