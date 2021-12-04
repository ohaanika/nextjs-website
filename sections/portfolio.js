const Portfolio = () => (
  <section className="section portfolio-section animate__animated animate__fadeIn animate__fast" id="portfolio">
    <div className="container">
      <div className="col portfolio-header">
        <h1>Portfolio</h1>
        <h4>Check out some of our Interactive Apps</h4>
        <br/>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="portfolio-grid fade-in">
              <a href="https://minty-budget-tool.herokuapp.com/" className="portfolio-item tall active one"
                target="_blank">
                <div className="text-inside-portfolio-item">
                  <h3>Minty Budget App</h3>
                  <h5>
                    Gain insights into your budgets and finances.
                  </h5>
                </div>
              </a>
              <a href="https://dash-demo.plotly.host/dash-nyc-complaints/"
                className="portfolio-item tall active two" target="_blank">
                <div className="text-inside-portfolio-item">
                  <h3>NYC Complaints</h3>
                  <h5>
                    Dashboard of borough complaints, with an SQL and chart editor inside.
                  </h5>
                </div>
              </a>
              <a href="https://dash-demo.plotly.host/dash-admin-panel/"
                className="portfolio-item tall active three" target="_blank">
                <div className="text-inside-portfolio-item">
                  <h3>Admin Panel</h3>
                  <h5>
                    Manage the overall usage metrics of your Dash Enterprise server.
                  </h5>
                </div>
              </a>
              <a className="portfolio-item tall inactive four">
                <h3>Coming Soon</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
