import Link from 'next/link'

const Landing = () => (
  <section className="section landing-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <h1 className="landing-title animate__animated animate__fadeInLeft ">
            Professional Dash Apps by the Experts
          </h1>
          <p className="landing-paragraph animate__animated animate__fadeInLeft">
            With over 5 years of leading industry experience, we’re here to help you build production-ready,
            mobile-friendly, scalable Dash applications.
          </p>
          <div className="container landing-button-container">
            <Link href="#contact-us"><a>
              <button className="button primary-button animate__animated animate__fadeInLeft">
                Contact Us
              </button>
            </a></Link>
            <Link href="#portfolio"><a>
              <button className="button secondary-button animate__animated animate__fadeInUp animate__fast">
                Portfolio
              </button>
            </a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="landing-bg animate__animated animate__fadeInRight animate__fast"></div>
  </section>
)

export default Landing
