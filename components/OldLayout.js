const OldLayout = () => (
  <div>

    {/* Header */}
    <header>
      <nav>
        <ul class="menu">
          <li class="logo"><a href="#">ZyphrZyphr</a></li>
          <li class="item"><a href="#services">Services</a></li>
          <li class="item"><a href="#about-us">About Us</a></li>
          <li class="item"><a href="#team">Team</a></li>
          <li class="item"><a href="#portfolio">Portfolio</a></li>
          <li class="item button"><a href="#contact-us">Contact Us</a></li>
          <li class="toggle"><a><i class="fas fa-bars"></i></a></li>
        </ul>
      </nav>
    </header>

    {/* Landing Page */}
    <section class="section landing-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <h1 class="landing-title animate__animated animate__fadeInLeft ">
              Professional Dash Apps by the Experts
            </h1>
            <p class="landing-paragraph animate__animated animate__fadeInLeft">
              With over 5 years of leading industry experience, we’re here to help you build production-ready,
              mobile-friendly, scalable Dash applications.
            </p>
            <div class="container landing-button-container">
              <a href="#contact-us">
                <button class="button primary-button animate__animated animate__fadeInLeft">
                  Contact Us
                </button>
              </a>
              <a href="#portfolio">
                <button class="button secondary-button animate__animated animate__fadeInUp animate__fast">
                  Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="landing-bg animate__animated animate__fadeInRight animate__fast"></div>
    </section>

    {/* Services */}
    <section class="services-section animate__animated animate__fadeIn animate__fast" id="services">
      <div class="container">
        <div class="col">
          <div class="services-header">
            <h1>Our Services</h1>
            <h4>Consulting and Software Development</h4>
            <br/>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-4 fade-in">
            <div class="services-box">
              <div class="services-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>Consulting</h3>
              <br/>
              <p>
                Get ahead of the curve with industry secrets from our team of leading experts. Grab yourself
                a cup of coffee and let’s collaborate.
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 fade-in">
            <div class="services-box">
              <div class="services-icon">
                <i class="fas fa-laptop"></i>
              </div>
              <h3>Development</h3>
              <br/>
              <p>
                We build elegant scalable apps for any industry. We sharpen your code, protect your data,
                and package each app in a mobile-friendly experience.
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 fade-in">
            <div class="services-box">
              <div class="services-icon">
                <i class="fas fa-database"></i>
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
      <div class="services-bg blur"></div>
    </section>

    {/* About Us */}
    <section class="section about-section animate__animated animate__fadeIn animate__fast" id="about-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 fade-in">
            <div class="about-image-container">
              <img src="./images/image-worktime.svg"></img>
              <div class="about-image-stack-box">
                <div>
                  <i class="about-icon fas fa-mobile-alt"></i>
                  <span>
                    Mobile Friendly Design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 fade-in">
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

    {/* Team */}
    <section class="team-section" id="team">
      <div class="container">
        <div class="col team-header">
          <h1>The Team</h1>
          <h4>Meet our Executive Team</h4>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="team-box">
              <img src="./images/matt.jpg"></img>
              <div class="team-text">
                <h3>Matthew Chan</h3>
                <h4>CEO</h4>
                <hr/>
                <p>
                  Formerly a Solutions Engineer at Plotly, Matthew spent 2 years developing Dash
                  applications and consulting to Fortune 500’s in industries ranging from Oil and Gas to
                  Finance to Tech. While at the company, he led 5-figure workshops to high-value clients
                  across the U.S. and Germany. Matthew also contributed to Plotly’s Dash Bio and Dash
                  Enterprise.
                </p>
                <p>
                  He is currently wrapping up his BASc. in Electrical Engineering at The University of
                  British Columbia. When given the luxury of spare time, Matthew can be found road cycling, 
                  or planning his next adventure.
                </p>
                <div>
                  <a href="https://github.com/mtwichan">
                    <i class="team-social fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="team-box">
              <img src="./images/adam-2.jpg"></img>
              <div class="team-text">
                <h3>Adam Kulidjian</h3>
                <h4>CTO</h4>
                <hr/>
                <p>
                  As Plotly's former lead and #2 highest contributor to Plotly's Python Library, Adam contributed 
                  many key features to the library including gantt charts, sploms, and county choropleths.
                  He served as the core contributor of the Plotly Python library for 3 years, pushing the
                  total downloads to over 3 million.
                </p>
                <p>
                  Adam holds a B.Sc. in Mathematics from McGill University. In his spare time, he likes
                  to play jazz piano and draw short animations.
                </p>
                <div>
                  <a href="https://github.com/Kully">
                    <i class="team-social fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team-bg"></div>
    </section>

    {/* Portfolio */}
    <section class="section portfolio-section animate__animated animate__fadeIn animate__fast" id="portfolio">
      <div class="container">
        <div class="col portfolio-header">
          <h1>Portfolio</h1>
          <h4>Check out some of our Interactive Apps</h4>
          <br/>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="container">
              <div class="portfolio-grid fade-in">
                <a href="https://minty-budget-tool.herokuapp.com/" class="portfolio-item tall active one"
                  target="_blank">
                  <div class="text-inside-portfolio-item">
                    <h3>Minty Budget App</h3>
                    <h5>
                      Gain insights into your budgets and finances.
                    </h5>
                  </div>
                </a>
                <a href="https://dash-demo.plotly.host/dash-nyc-complaints/"
                  class="portfolio-item tall active two" target="_blank">
                  <div class="text-inside-portfolio-item">
                    <h3>NYC Complaints</h3>
                    <h5>
                      Dashboard of borough complaints, with an SQL and chart editor inside.
                    </h5>
                  </div>
                </a>
                <a href="https://dash-demo.plotly.host/dash-admin-panel/"
                  class="portfolio-item tall active three" target="_blank">
                  <div class="text-inside-portfolio-item">
                    <h3>Admin Panel</h3>
                    <h5>
                      Manage the overall usage metrics of your Dash Enterprise server.
                    </h5>
                  </div>
                </a>
                <a class="portfolio-item tall inactive four">
                  <h3>Coming Soon</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Us */}
    <section class="section contact-section" id="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="contact-container-header">
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
            <div class="contact-container">
              <div class="contact-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Calendly</h6>
                <div>
                  <a class="contact-calendly-link" href=""
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/zyphr-form/15min'});return false;">Schedule
                    a time with us!
                  </a>
                </div>
              </div>
            </div>
            <div class="contact-container">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Email Address</h6>
                <div>zyphr.form@gmail.com</div>
              </div>
            </div>
            <div class="contact-container">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-content">
                <h6 class="contact-title">Location</h6>
                <div>Vancouver, Canada</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="contact-form">
              <h2>Contact Us</h2>
              <p>Please fill out the form below.</p>
              <form id="ajax-form" method="POST" target="hiddenFrame">
                <input type="text" id="fName" name="firstName" placeholder="Your first name.."
                  class="contact-form-item" required></input>
                <input type="text" id="lName" name="lastName" placeholder="Your last name.."
                  class="contact-form-item" required></input>
                <input type="text" id="cName" name="companyName" placeholder="Your company name.."
                  class="contact-form-item" required></input>
                <input type="text" id="eAddress" name="emailAddress" placeholder="Your email address.."
                  class="contact-form-item" required></input>
                <textarea id="inquiry" name="inquiry" placeholder="Write something.."
                  class="contact-form-item contact-textarea" required></textarea>
                <input type="submit" value="submit" class="button primary-button contact-submit-button"></input>
              </form>
              <div id="ajax-form-result" class="contact-form-response"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer class="footer-section">
      <div class="row">
        <div class="col-12 footer-copyright">
          <p>© 2020 Zyphr Solutions Inc. All Rights Reserved.</p>
          <p>Coded with 💛 by Matthew Chan & Adam Kulidjian</p>
        </div>
      </div>
    </footer>

    {/* Hide redirect from form */}
    {/* <iframe name="hiddenFrame" width="0" height="0" border="0" style="display: none;"></iframe> */}

  </div>
)

export default OldLayout
