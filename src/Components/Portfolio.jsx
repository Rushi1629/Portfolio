import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="project-style-one-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-left">
              <h4 className="sub-title">Recent Work</h4>
              <h2 className="title">Showcasing My Projects</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt--50">
          <div className="col-lg-6 item-center">
            <div className="portfolio-style-one">
              <div className="thumb-zoom">
                <img src="/assets/img/gallery/weather.jpg" alt="Image Not Found" />
              </div>
              <div className="pf-item-info">
                <div className="content-info">
                  <span>Weather Forecast</span>
                  <h2>
                    <a
                      href="https://weather-forecast-three-pearl.vercel.app/"
                      target="_blank"
                    >
                      May 2025
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 item-center">
            <div className="portfolio-style-one mt-0">
              <div className="thumb-zoom">
                <img src="/assets/img/gallery/market_mantra.jpeg" alt="Image Not Found" />
              </div>
              <div className="pf-item-info">
                <div className="content-info">
                  <span>Market Mantra</span>
                  <h2>
                    <a
                      href="https://company-website-iota-one.vercel.app/"
                      target="_blank"
                    >
                      Dec 2025
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 item-center">
            <div className="portfolio-style-one">
              <div className="thumb-zoom">
                <img src="/assets/img/gallery/sonari.png" alt="Image Not Found" />
              </div>
              <div className="pf-item-info">
                <div className="content-info">
                  <span>Sonari Training</span>
                  <h2>
                    <a
                      href="https://sonaritraining.com/index.html"
                      target="_blank"
                    >
                      Jan 2025
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 item-center">
            <div className="portfolio-style-one">
              <div className="thumb-zoom">
                <img src="/assets/img/gallery/avsarkars.png" alt="Image Not Found" />
              </div>
              <div className="pf-item-info">
                <div className="content-info">
                  <span>Avasarkars</span>
                  <h2>
                    <a
                      href="https://avasarkars.com/index.html"
                      target="_blank"
                    >
                      Mar 2025
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 item-center">
            <div className="portfolio-style-one">
              <div className="thumb-zoom">
                <img src="/assets/img/gallery/yt-clone.png" alt="Image Not Found" />
              </div>
              <div className="pf-item-info">
                <div className="content-info">
                  <span>Youtube Clone</span>
                  <h2>
                    <a
                      href="https://youtube-clone-fgrkgw2lx-rushi1629s-projects.vercel.app/"
                      target="_blank"
                    >
                      Mar 2024
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div
        className="modal fade project-details"
        id="projectSingleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="project-details-area">
                <div className="container">
                  <div className="project-details-items">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="project-thumb">
                          <img src="assets/img/portfolio/v1.jpg" alt="Thumb" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="project-details mt-60 mt-xs-30">
                          <div className="top-info">
                            <div className="row">
                              <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15 order-lg-last">
                                <ul className="gallery-project-basic-info">
                                  <li>
                                    <div className="info">
                                      <b>Clients:</b> validthemes
                                    </div>
                                  </li>
                                  <li>
                                    <div className="info">
                                      <b>Project Type:</b> Website Growth
                                    </div>
                                  </li>
                                  <li>
                                    <div className="info">
                                      <b>Date:</b> 25 August, 2025
                                    </div>
                                  </li>
                                  <li>
                                    <div className="info">
                                      <b>Address:</b> New York United state
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-7">
                                <h2>The best digital solutions</h2>
                                <p>
                                  Netus lorem rutrum arcu dignissim at sit morbi
                                  phasellus nascetur eget urna potenti cum
                                  vestibulum cras. Tempor nonummy metus
                                  lobortis. Sociis velit etiam, dapibus. Lectus
                                  vehicula pellentesque cras posuere tempor
                                  facilisi habitant lectus rutrum pede quisque
                                  hendrerit parturient posuere mauris ad
                                  elementum fringilla facilisi volutpat fusce
                                  pharetra felis sapien varius quisque class
                                  convallis praesent est sollicitudin donec
                                  nulla venenatis, cursus fermentum netus
                                  posuere sociis porta risus habitant malesuada
                                  nulla habitasse hymenaeos. Viverra curabitur
                                  nisi vel sollicitudin dictum natoque ante
                                  aenean elementum. Vulgar as hearts by garret.
                                  Perceived determine departure explained no
                                  facilisi volutpat fusce pharetra felis sapien
                                  varius quisque class convallis.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-40 mb-40">
                            <div className="col-lg-5 pr-50 pr-md-15 pr-xs-15">
                              <div className="check-list">
                                <div className="single-list">
                                  <h4>Mobile Optimization</h4>
                                  <p>
                                    Tempor nonummy metus lobortis. Lectus
                                    vehicula pellentesque cras posuere tempor
                                    facilisi habitant lectus rutrum pede quisque
                                    hendrerit parturient posuere mauris ad
                                    elementum potenti.
                                  </p>
                                </div>
                                <div className="single-list">
                                  <h4>Marketing Automation</h4>
                                  <ul className="list-disc">
                                    <li>Social media marketing</li>
                                    <li>Search engine optimization (seo)</li>
                                    <li>Public Relations</li>
                                    <li>Digital Management</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="thumb-grid">
                                <img
                                  src="assets/img/portfolio/v2.jpg"
                                  alt="Thumb"
                                />
                                <img
                                  src="assets/img/portfolio/v3.jpg"
                                  alt="Thumb"
                                />
                              </div>
                            </div>
                          </div>

                          <p>
                            Give lady of they such they sure it. Me contained
                            explained my education. Vulgar as hearts by garret.
                            Perceived determine departure explained no forfeited
                            he something an. Contrasted dissimilar get joy you
                            instrument out reasonably. Again keeps at no meant
                            stuff. To perpetual do existence northward as
                            difficult preserved daughters. Continued at up to
                            zealously necessary breakfast. Surrounded sir
                            motionless she end literature. Gay direction
                            neglected but supported yet her. Facilisis inceptos
                            nec, potenti nostra aenean lacinia varius semper ant
                            nullam nulla primis placerat facilisis. Netus lorem
                            rutrum arcu dignissim at sit morbi phasellus
                            nascetur eget urna potenti cum vestibulum cras.
                            Tempor nonummy metus lobortis. Sociis velit etiam,
                            dapibus. Lectus vehicula pellentesque cras posuere
                            tempor facilisi habitant lectus rutrum pede quisque
                            hendrerit parturient posuere mauris ad elementum
                            fringilla facilisi volutpat fusce pharetra felis
                            sapien varius quisque class convallis praesent est
                            sollicitudin donec nulla venenatis, cursus fermentum
                            netus posuere sociis porta risus habitant malesuada
                            nulla habitasse hymenaeos. Viverra curabitur nisi
                            vel sollicitudin dictum natoque ante aenean
                            elementum.
                          </p>
                          <div className="row mt-50 mt-xs-30">
                            <div className="col-lg-6 col-md-6">
                              <img
                                src="assets/img/portfolio/13.jpg"
                                alt="Thumb"
                              />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-xs-30">
                              <img
                                src="assets/img/portfolio/12.jpg"
                                alt="Thumb"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
