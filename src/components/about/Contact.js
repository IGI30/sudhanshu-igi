import React from "react";

const Contact = (props) => {

    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">Get in Touch</h6>
                <h2 className="section-head">Contact</h2><br />
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-card" >
                            <div className="contact-card-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-card-text">
                                <p><a onClick={(event) => event.preventDefault()} href="#">sudhanshuigi@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="contact-card" >
                            <div className="contact-card-icon">
                                <i className="fa fa-map"></i>
                            </div>
                            <div className="contact-card-text">
                                <p>Aishwarya Enclave, Kothanur, Bangalore, India 560077</p>
                            </div>
                        </div>
                        <div className="contact-card" >
                            <div className="contact-card-icon">
                                <i className="fa fa-mobile"></i>
                            </div>
                            <div className="contact-card-text">
                                <p><a onClick={(event) => event.preventDefault()} href="tel://">+91 79053 07155</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-md-10 offset-md-1">
                                <form action="" className="contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn m-btn-primary btn-send-message" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;