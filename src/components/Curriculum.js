import React from 'react'


const Curriculum = () => {
    return (
        <div id="scroll-curriculum" className="container-fluid">
            <p id="fake-for-scroll">fake-for-scroll</p>

            <div id="cv-row" className="row">
                <h2 id="cvh2">Curriculum</h2>
            </div>

            <div className="row">
                <div class="col-md-6 offset-md-3">
                    <ul class="timeline">
                        <li className="curriculum-li">
                            <h5 className="class-h5">Java Full Stack Developer Course</h5>
                            <p className="curriculum-p">February 2021/ August 2021</p>
                            <p>Gm Formazione - Rome, Italy</p>
                        </li>
                        <li className="curriculum-li">
                            <h5 className="class-h5">Customer service Representative</h5>
                            <p className="curriculum-p">October 2019/ August 2020</p>
                            <p>Qoqo - Eindhoven, Netherlands   </p>
                        </li>
                        <li className="curriculum-li">
                            <h5 className="class-h5">Export manager</h5>
                            <p className="curriculum-p">April 2017/ March 2019</p>
                            <p>Energia e Ambiente di Antonino Giare' - Rome, Italy   </p>
                        </li>
                        <li className="curriculum-li">
                            <h5 className="class-h5">Junior export manager  </h5>
                            <p className="curriculum-p">January 2016/ February 2017</p>
                            <p>I'Moving/Green Vehicles - Jesi, Italy  </p>
                        </li>
                        <li className="curriculum-li">
                            <h5 className="class-h5">English teacher </h5>
                            <p className="curriculum-p">January 2015/ June 2015</p>
                            <p>Little seeds Montessori kindergarten - Beijing, China  </p>
                        </li>
                    </ul>
                </div>
            </div>


            <h4 id="cvh4">Want to know More?</h4>
            <h5 id="cvh5">Send me an email and ask for the complete CV!</h5>

        </div >
    )
}

export default Curriculum

