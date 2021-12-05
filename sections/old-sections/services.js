const Services = () => (
  <section className="services-section animate__animated animate__fadeIn animate__fast" id="services">
    <div className="container">
      <div className="col">
        <div className="services-header">
          <h1>Our Services</h1>
          <h4>Consulting and Software Development</h4>
          <br/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4 fade-in">
          <div className="services-box">
            <div className="services-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Consulting</h3>
            <br/>
            <p>
              Get ahead of the curve with industry secrets from our team of leading experts. Grab yourself
              a cup of coffee and let’s collaborate.
            </p>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 fade-in">
          <div className="services-box">
            <div className="services-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <h3>Development</h3>
            <br/>
            <p>
              We build elegant scalable apps for any industry. We sharpen your code, protect your data,
              and package each app in a mobile-friendly experience.
            </p>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 fade-in">
          <div className="services-box">
            <div className="services-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Deployment</h3>
            <br/>
            <p>
              Ensure your app runs securely on your trusted server, and database. We handle Dash
              Enterprise, AWS, GCP, Heroku, and the list goes on.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="services-bg blur"></div>
  </section>
)

export default Services
