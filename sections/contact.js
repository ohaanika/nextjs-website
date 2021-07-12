const Contact = () => (
  <section className="section contact-section" id="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="contact-container-header">
            <h1>
              Get in Touch
            </h1>
            <h5>
              We deliver secure, scalable Dash apps, from start to finish, guiding you through the entire
              process.
            </h5>
            <h5>
              Feel free to schedule a call for a consulting estimate or send us a message about your next
              app idea!
            </h5>
          </div>
          <div className="contact-container">
            <div className="contact-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Calendly</h6>
              <div>
                <a className="contact-calendly-link" href=""
                  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/zyphr-form/15min'});return false;">Schedule
                  a time with us!
                </a>
              </div>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Email Address</h6>
              <div>zyphr.form@gmail.com</div>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-content">
              <h6 className="contact-title">Location</h6>
              <div>Vancouver, Canada</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Please fill out the form below.</p>
            <form id="ajax-form" method="POST" target="hiddenFrame">
              <input type="text" id="fName" name="firstName" placeholder="Your first name.."
                className="contact-form-item" required></input>
              <input type="text" id="lName" name="lastName" placeholder="Your last name.."
                className="contact-form-item" required></input>
              <input type="text" id="cName" name="companyName" placeholder="Your company name.."
                className="contact-form-item" required></input>
              <input type="text" id="eAddress" name="emailAddress" placeholder="Your email address.."
                className="contact-form-item" required></input>
              <textarea id="inquiry" name="inquiry" placeholder="Write something.."
                className="contact-form-item contact-textarea" required></textarea>
              <input type="submit" value="submit" className="button primary-button contact-submit-button"></input>
            </form>
            <div id="ajax-form-result" className="contact-form-response"></div>
          </div>
        </div>
      </div>
    </div>
    {/* Hide redirect from form */}
    {/* <iframe name="hiddenFrame" width="0" height="0" border="0" style="display: none;"></iframe> */}
  </section>
)

export default Contact
