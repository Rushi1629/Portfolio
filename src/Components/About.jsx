import React from "react";

const About = () => {
  return (
    <div id="about" className="about-style-one-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-style-one-thumb">
              <img src="assets/img/illustration/2.jpg" alt="Image Not found" />
              <div className="curve-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 150"
                  version="1.1"
                >
                  <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                  <text>
                    <textPath href="#textPath">Years of experience</textPath>
                  </text>
                </svg>
                <h4>2+</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-50">
            <div className="about-style-one-info">
              <h3 className="sub-title">About Me</h3>
              <h2 className="title">
                I develop modern <br /> web applications
              </h2>
              <p>
                Software Engineer & Full-Stack Web Developer specializing in
                React and MERN Stack. Passionate about building responsive,
                modern, and user-centric web applications with clean design and
                scalable architecture.
              </p>
              <a href="/assets/RUSHIKESH-BHOR.pdf" className="btn-standard mt-10 smooth-menu">
                Donwload CV
              </a>
              <div className="about-item">
                <h3 className="text-white">
                  <i className="fas fa-user"></i> Biography
                </h3>

                <pre
                  className="bg-transparent"
                  style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "monospace",
                    fontSize: "15px",
                  }}
                >
                  <span className="text-info">const developer = {"{"}</span>
                  {"\n  "}
                  <span className="text-primary">name:</span>{" "}
                  <span className="text-success-info">"Rushikesh Bhor",</span>
                  {"\n  "}
                  <span className="text-primary">title:</span>{" "}
                  <span className="text-success-info">
                    "Software Engineer & Full-Stack Web Developer",
                  </span>
                  {"\n  "}
                  <span className="text-primary">skills:</span>{" "}
                  <span className="text-warning">
                    ["HTML5", "CSS3", "JavaScript", "React", "Node.js",
                    "Express.js", "MongoDB", "Bootstrap", "Tailwind CSS", "SQL",
                    "Core Java"],
                  </span>
                  {"\n  "}
                  <span className="text-primary">tools:</span>{" "}
                  <span className="text-warning">
                    ["VS Code", "Git", "GitHub", "Vercel", "Netlify", "Render"],
                  </span>
                  {"\n  "}
                  <span className="text-primary">passion:</span>{" "}
                  <span className="text-success-info">
                    "Building modern, responsive & user-centric web
                    applications",
                  </span>
                  {"\n  "}
                  <span className="text-primary">motto:</span>{" "}
                  <span className="text-success-info">
                    "Clean code. Better experience."
                    {"\n"}
                    {"}"};
                  </span>
                  {"\n"}
                  {"\n\n"}
                  <span className="text-info">
                    function currentFocus() {"{"}
                  </span>
                  {"\n  "}
                  <span className="text-info">return</span>{" "}
                  <span className="text-success-info">
                    "Developing scalable web apps & real-world projects"
                    {"\n"}
                    {"}"};{"\n"}
                  </span>
                </pre>
              </div>

              <div className="about-item">
                <h3 className="text-white">
                  <i className="fas fa-rocket"></i> Tech Skill
                </h3>
                <ul className="skill-items mt-10">
                  <li>
                    <div className="icon">
                      <i className="fab fa-react"></i>
                    </div>
                    <div className="content">
                      {/* <span>75%</span> */}
                      <h5>React Js</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-html5"></i>
                    </div>
                    <div className="content">
                      <h5>HTML 5</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-css3"></i>
                    </div>
                    <div className="content">
                      <h5>CSS 3</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-node"></i>
                    </div>
                    <div className="content">
                      <h5>Node Js</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="express-logo"
                        viewBox="0 0 1120.322 250"
                        width="60"
                        height="60"
                      >
                        <path d="M347.47162 250V4.890464h13.29516v38.55596a50.415241 50.415241 0 0 0 4.33954-5.43506c11.10412-23.03785 34.52487-37.57744 60.09412-37.29026 30.31296-.90408 54.94623 10.31704 69.422 37.29026a119.86915 119.86915 0 0 1 2.89302 109.881816c-13.4866 30.22788-46.79895 45.25672-82.46189 39.73657a66.688515 66.688515 0 0 1-53.22317-35.12049v97.4801zm13.29516-158.403836 2.97812 28.781356c5.25425 32.75927 24.62263 52.11702 55.03132 55.75458a62.540425 62.540425 0 0 0 68.69874-39.73657c11.82737-28.18574 10.95521-60.094116-2.33995-87.620406a61.26409 61.26409 0 0 0-64.54001-35.66294 59.668671 59.668671 0 0 0-53.30827 44.07611 304.40595 304.40595 0 0 0-6.51995 34.39724zm420.10574 33.312346a71.687494 71.687494 0 0 1-70.06017 63.35941c-55.75458 2.80794-81.91945-34.21642-86.07817-76.94174a123.27271 123.27271 0 0 1 10.85948-67.890396 75.729222 75.729222 0 0 1 78.83497-42.26797 72.432023 72.432023 0 0 1 64.26348 55.12705 371.94535 371.94535 0 0 1 6.24341 40.73636H638.50796c-2.71221 38.736776 18.10269 69.879356 47.6073 77.388456 36.74782 9.04071 68.1563-6.88157 79.55823-41.82125 2.5314-8.96625 7.14748-10.23195 15.29475-7.68992zM638.4016 84.629504h130.97326c-.81898-41.26817-26.51586-71.26205-61.37045-71.60241-39.35367-.63816-67.89039 28.15383-69.60281 71.60241zm169.53986 41.183076h12.83781a51.478853 51.478853 0 0 0 30.22787 44.35265 79.026422 79.026422 0 0 0 68.61365-1.80814 30.844768 30.844768 0 0 0 18.10269-30.3236 27.973013 27.973013 0 0 0-18.82595-27.97301c-14.12477-5.25425-29.14298-8.14727-43.53366-12.763346a319.0838 319.0838 0 0 1-43.81021-16.01801c-23.18675-11.31684-24.62263-55.39295 1.62733-69.34755a92.427941 92.427941 0 0 1 88.34367-1.36142c16.95398 9.35979 26.32441 28.26019 23.53775 47.43712h-11.00839c0-.5318-.9998-.99979-.9998-1.54223-1.36142-35.09922-30.86604-46.07571-62.54043-42.99123-9.57251 1.06361-18.64513 3.95664-27.15403 8.23236a27.122123 27.122123 0 0 0-15.74147 27.15404 27.122123 27.122123 0 0 0 18.10269 25.5267c13.82697 5.07343 28.50482 8.32809 42.81041 12.306l34.56741 9.04071a40.842727 40.842727 0 0 1 28.05811 36.843536c2.76539 18.56004-6.70076 36.801-23.44203 45.25672-30.22787 17.10289-80.01558 12.58254-102.1919-9.04071-11.34875-11.41256-17.67724-26.9094-17.54961-42.99123zm306.10774-67.794666h-12.0401c0-1.62733-.6382-3.19084-.819-4.43526a39.353669 39.353669 0 0 0-32.0466-37.83271 79.026422 79.026422 0 0 0-50.7769 2.44631 30.844768 30.844768 0 0 0-22.35715 29.41953 28.398458 28.398458 0 0 0 21.71895 28.60054l55.0313 14.12478a153.05386 153.05386 0 0 1 17.5497 5.33934c17.5496 6.381666 29.462 22.676216 29.9938 41.300076a45.203539 45.203539 0 0 1-27.6539 42.96995 100.72412 100.72412 0 0 1-81.4621.81898 56.477833 56.477833 0 0 1-34.0356-54.85051h11.76356c4.42463 21.32544 19.07054 39.08777 39.16224 47.49031 20.0916 8.40254 43.0337 6.33913 61.3066-5.48824a32.333825 32.333825 0 0 0 17.3794-30.22787 27.973013 27.973013 0 0 0-19.1024-27.7922c-14.1248-5.25425-29.143-8.05155-43.5337-12.763356a320.67922 320.67922 0 0 1-44.0761-15.83719c-22.6337-11.13602-24.44184-54.8505 1.3614-68.79447a91.151606 91.151606 0 0 1 89.7902-.99979 47.330764 47.330764 0 0 1 22.7188 46.43733zM325.59311 183.84329a20.740447 20.740447 0 0 1-25.70752-9.7746l-46.79895-64.72083-6.78585-9.04071-54.30807 73.85727a19.889557 19.889557 0 0 1-24.44182 9.59378l69.96445-93.863816-65.0931-84.81247c9.6576-3.48865 20.42136.29781 25.79261 9.04071l48.50074 65.51854 48.78791-65.26328a19.464112 19.464112 0 0 1 24.261-9.05134l-25.2608 33.51443-34.21642 44.53347a9.040708 9.040708 0 0 0 0 13.48661l65.16755 86.982236zM622.66013 4.177844v12.76335a65.624902 65.624902 0 0 0-69.87935 67.79467v99.564786h-12.94417V4.975554h12.76336v36.74781c15.65637-26.80304 39.82165-36.74781 70.14525-37.47107ZM.021272 88.724414l5.700964-28.15383c15.656379-55.66949 79.473139-78.83497 123.379074-44.35265 25.70751 20.18737 32.1211 48.78792 30.86604 81.01538H15.135208C12.79526 154.79603 54.329335 189.55489 107.45679 171.81383c17.50706-6.38167 30.68522-20.93189 35.02476-39.01331 2.80794-9.04071 7.44529-10.59359 15.93292-7.9771a73.495636 73.495636 0 0 1-35.12049 53.68054 85.089014 85.089014 0 0 1-99.118064-12.66763c-12.93353-14.53959-20.740447-32.91881-22.261413-52.32975 0-3.19084-1.063613-6.16895-1.808142-9.0407Q0 96.414334 0 88.724414Zm15.294751-3.89282H146.28929c-.81898-41.72553-27.15403-71.32587-62.274525-71.60241-39.098402-.53181-67.071415 28.41973-68.794468 71.42159Z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Express Js</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <div className="content">
                      <h5>JavaScript</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <img
                        src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5>MongoDB</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-bootstrap"></i>
                    </div>
                    <div className="content">
                      <h5>Bootstrap</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <svg
                        viewBox="0 0 167 21"
                        className="bg-white"
                        width="60"
                        height="60"
                        fill="none"
                      >
                        <path transform="translate(00, -30) scale(4.5)" fill="#00bcff" d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Tailwind Css</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <svg width="60" height="60" className="bg-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.562 15.256A21.2 21.2 0 0 0 16 16.449a21.2 21.2 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.4 10.4 0 0 1-2.084 1.076A22.3 22.3 0 0 1 16 12.078a22.4 22.4 0 0 1-7.879-1.3A10.3 10.3 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006m0 6.705a15.6 15.6 0 0 0 2.6.741 25 25 0 0 0 4.838.453 25 25 0 0 0 4.838-.452 15.6 15.6 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.7 10.7 0 0 1-1.692.825A23.5 23.5 0 0 1 16 18.74a23.5 23.5 0 0 1-8.271-1.348 11 11 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001M16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.5 23.5 0 0 1 16 25.445a23.4 23.4 0 0 1-8.271-1.351l-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30" style={{ "fill": "#ffda44" }} />
                        <ellipse cx="16" cy="5.894" rx="9.963" ry="3.894" style={{ "fill": "#ffda44" }} />
                      </svg>

                    </div>
                    <div className="content">
                      <h5>SQL</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fab fa-java bg-secondary"></i>
                    </div>
                    <div className="content">
                      <h5>Core Java</h5>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <svg fill="" className="ts" height="60" viewBox="0 0 27 26" width="60" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#fff" fillRule="evenodd"></path></svg>
                    </div>
                    <div className="content">
                      <h5>TypeScript</h5>
                    </div>
                  </li>

                </ul>
              </div>

              <div className="about-item">
                <h3 className="text-white">
                  <i className="fas fa-graduation-cap"></i> Education
                </h3>
                <ul className="education-table">
                  <li>
                    <h4>Master of Computer Science</h4>
                    <h5>Changu Kana Thakur College</h5>
                    <span>2021 - 2023</span>
                    {/* <p>
                      The training provided by universities in order to prepare
                      people to work in various sectors of the economy or areas
                      of culture.
                    </p> */}
                  </li>
                  <li>
                    <h4>Bachelor of Computer Science</h4>
                    <h5>Changu Kana Thakur College</h5>
                    <span>2018 - 2021</span>
                  </li>
                  <li>
                    <h4>HSC (Higher Secondary)</h4>
                    <h5>Maharashtra State Board</h5>
                    <span>2017 - 2018</span>
                  </li>
                  <li>
                    <h4>SSC</h4>
                    <h5>Maharashtra State Board</h5>
                    <span>2015 - 2016</span>
                  </li>
                </ul>
              </div>

              <div className="about-item">
                <h3 className="text-white">
                  <svg width="30" height="30" style={{"marginRight":"10px"}} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg">
                    <path d="m326.563 301.063-1.22-93.282c-.187-14.25 11.344-25.875 25.594-25.875h322.126c14.156 0 25.593 11.438 25.593 25.594v93.188h-65.625V247.53h-241.5l.656 52.781z" fill="#8e6620" />
                    <path d="M404.094 335.75H312.5c-1.594 0-3-1.312-3-3v-30.187c0-1.594 1.313-3 3-3h91.594c1.594 0 3 1.312 3 3v30.187c0 1.688-1.406 3-3 3m307.312 0h-91.125a3.16 3.16 0 0 1-3.187-3.187v-29.625a3.16 3.16 0 0 1 3.187-3.188h91.125a3.16 3.16 0 0 1 3.188 3.188v29.625c.093 1.78-1.407 3.187-3.188 3.187" fill="#ffb000" />
                    <path d="M862.906 932.188H162.97c-38.719 0-70.125-31.407-70.125-70.125v-459.75c0-38.72 31.406-70.125 70.125-70.125h699.844c38.718 0 70.125 31.406 70.125 70.125v459.75c.093 38.718-31.313 70.125-70.032 70.125" fill="#8e6620" />
                    <path d="m234.575 332.298 75-.215 1.727 599.343-75 .216zm480.096 0 75-.215 1.726 599.343-75 .216z" fill="#ffb000" />
                  </svg>


                  Work Experience
                </h3>
                <ul className="education-table">
                  <li>
                    <h4>Fyntune Solution</h4>
                    <h5>Software Engineer</h5>
                    <span>Dec 2023 - Present</span>
                  </li>
                  <li>
                    <h4>TechSpiron System</h4>
                    <h5>Web Developer</h5>
                    <span>July 2023 - Sep 2023</span>
                  </li>
                  <li>
                    <h4>SKYQ Infotech</h4>
                    <h5>Web Developer</h5>
                    <span>Jan 2023 - Mar 2023</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
