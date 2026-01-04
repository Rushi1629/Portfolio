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
      
    </div>
  );
};

export default Portfolio;
