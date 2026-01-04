import bgImage from '/assets/img/shape/map-light.png';
const Contact = () => {
    return (
        <div
            id="contact"
            className="contact-area contact-page overflow-hidden default-padding"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                        <div className="contact-style-one-info">
                            <div className="top-info">
                                <h2 className="gradient-text">Let's Talk</h2>
                                <div className="call">
                                    <img src="assets/img/icon/call.png" alt="Image not Found" />
                                    <a className="phone-link" href="tel:8689901612">
                                        +91 8689901612
                                    </a>
                                </div>
                            </div>
                            <ul className="contact-address">
                                <li>
                                    <div className="info">
                                        <h4>Location</h4>
                                        <p>
                                            Kalamboli, Navi Mumbai
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <h4>Official Email</h4>
                                        <a href="mailto:rushikeshbhor1629@gmail.com">rushikeshbhor1629@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                            <p className="copyright">© {new Date().getFullYear()} RUSHI. All Rights Reserved</p>
                        </div>
                    </div>

                    <div className="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                        <div className="contact-form-style-one">
                            <form
                                action=""
                                method="POST"
                                className="contact-form contact-form mt-30"
                            >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                type="text"
                                            />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                type="email"
                                            />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                type="text"
                                            />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea
                                                className="form-control"
                                                id="comments"
                                                name="comments"
                                                placeholder="Tell Us About Project *"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="button" name="submit">
                                            <i className="fa fa-paper-plane"></i> Get in Touch
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
