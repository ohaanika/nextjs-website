const Team = () => (
  <section className="team-section" id="team">
    <div className="container">
      <div className="col team-header">
        <h1>The Team</h1>
        <h4>Meet our Executive Team</h4>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="team-box">
            <img src="./images/team/matt.jpg"></img>
            <div className="team-text">
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
                British Columbia. 
                {/* When given the luxury of spare time, Matthew can be found road cycling, 
                or planning his next adventure. */}
              </p>
              <div>
                <a href="https://github.com/mtwichan">
                  <i className="team-social fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="team-box">
            <img src="./images/team/adam-2.jpg"></img>
            <div className="team-text">
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
                  <i className="team-social fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="team-bg"></div>
  </section>
)

export default Team
