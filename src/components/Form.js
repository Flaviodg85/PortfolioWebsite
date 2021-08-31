import React from 'react'

const Form = () => {
    return (
        <div className="container-fluid bg-light">

            <form>

                <div id="studies-row" className="row">
                    <h2 id="studies-h2">Contact me</h2>
                </div>

                <div id="studies-row" className="row">
                    <div className="col-sm-12 text-center">
                        <h5 id="">I will contact you as soon as possible</h5>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-5 offset-md-1">
                        <label for="inputName">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Name" />
                        <label for="inputEmail">Email</label>
                        <input type="text" class="form-control" id="inputEmail" placeholder="Email" />
                        <label for="inputSubject">Subject</label>
                        <input type="text" class="form-control" id="inputSubject" placeholder="Subject" />

                    </div>

                    <div className="col-md-5">
                        <label for="inputMessage">Message</label>
                        <textarea type="text" class="form-control" id="inputMessage" placeholder=" Enter your message here"
                            maxlength="3000" style={{ height: "85%" }} />
                    </div>
                </div>

                <div className="row" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                    <div className="col-sm-12 text-center">
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>

            </form>

        </div >
    )
}

export default Form
