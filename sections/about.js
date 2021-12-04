const About = () => (
  <section className="section about-section animate__animated animate__fadeIn animate__fast" id="about-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 fade-in">
          <div className="about-image-container">
            <img src="./images/image-worktime.svg"></img>
            <div className="about-image-stack-box">
              <div>
                <i className="about-icon fas fa-mobile-alt"></i>
                <span>
                  Mobile Friendly Design
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 fade-in">
          <h1>
            Put your Trust in the Experts
          </h1>
          <div>
            <p>
              We get it: you don’t want to be bogged down styling CSS, fixing bugs or buried in
              documentation. You’d rather hit your next deadline and prepare for the big presentation.
            </p>
            <p>
              Maybe you’re looking to launch an all-in-one analytics tool, add a secure login page, or
              brainstorm that mission-critical feature for your app. Our team of dedicated software
              developers and consultants collaborate with you to take your ideas to production.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
