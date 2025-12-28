
const Home = () => {
  return (
    <div
      id="home"
      className="banner-style-one-area auto-height default-padding"
    >
      <div className="container">
        <div className="banner-top">
          <div className="row align-center">
            <div className="col-lg-7 pr-50 pr-md-15 pr-xs-15">
              <div className="information">
                <div className="content">
                  <h2>
                    Hey{" "}
                    <img
                      src="assets/img/shape/harnd.png"
                      alt="image not found"
                    />{" "}
                    , I'm <br />
                    Rushikesh Bhor
                  </h2>
                  <p>
                    I'm creative designer based in USA, and I'm <br /> very
                    passionate and dedicated to my work. Say Hello
                  </p>
                </div>
                <div className="profile-grid">
                  <ul>
                    <li>
                      <a className="smooth-menu" href="#services">
                        Services
                        <div className="icon-list">
                          <img
                            src="assets/img/brand/services.jpg"
                            alt="Image not Found"
                          />
                          <img
                            src="assets/img/brand/node.png"
                            alt="Image not Found"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="smooth-menu" href="#portfolio">
                        Projects
                        <img
                        className="m-auto"
                          style={{width:"75px"}}
                          src="assets/img/brand/projects.png"
                          alt="Image Not Found"
                        />
                      </a>
                    </li>
                    <li>
                      <a className="smooth-menu" href="#about">
                        About
                        <strong>A</strong>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="thumb">
                <img
                  src="assets/img/illustration/1.png"
                  alt="Image Not Found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
