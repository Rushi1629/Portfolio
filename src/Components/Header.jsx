import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-common mobile-sidenav nav-blur navbar-sticky navbar-default validnavs navbar-fixed white no-background">

                <div className="container d-flex justify-content-between align-items-center">


                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand smooth-menu" href="#home">
                            <img src="assets/img/brand/logo2.png" className="logo logo-display" alt="Logo"/>
                                <img src="assets/img/brand/logo.png" className="logo logo-scrolled" alt="Logo"/>
                                </a>
                            </div>

                            <div className="collapse navbar-collapse" id="navbar-menu">

                                <img src="assets/img/logo.png" alt="Logo"/>
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                        <i className="fa fa-times"></i>
                                    </button>

                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className="dropdown">
                                            <a href="#" className="smooth-menu" >Home</a>
                                        </li>
                                        <li>
                                            <a className="smooth-menu" href="#services">Services</a>
                                        </li>
                                        <li>
                                            <a className="smooth-menu" href="#about">About</a>
                                        </li>
                                        <li>
                                            <a className="smooth-menu" href="#portfolio">Portfolio</a>
                                        </li>
                                        <li>
                                            <a className="smooth-menu" href="#contact">contact</a>
                                        </li>
                                    </ul>
                            </div>

                            <div className="attr-right">
                                <div className="attr-nav flex">
                                    <ul>
                                        <li className="contact">
                                            <div className="call">
                                                <div className="icon">
                                                    <i className="fas fa-comments-alt-dollar"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Have any Questions?</p>
                                                    <h5><a href="mailto:info@crysta.com">rushikeshbhor1629@gmail.com</a></h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                    </div>
                    <div className="overlay-screen"></div>
            </nav>
        </header>
    )
}

export default Header