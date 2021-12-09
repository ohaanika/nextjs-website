import Link from 'next/link'
import Section from '../components/section'
import CircleText from '../components/visuals/circleText'

const Landing = () => (
  <Section id="team">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12" style={{paddingRight: "20px"}}>
        <h3><CircleText color="var(--color-primary)">* Dash * Plotly *</CircleText></h3>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h2>Professional Dash Apps by the Experts</h2>
        <h3 style={{fontWeight: "normal", textTransform: "none"}}>
          With over <b>5</b> years of leading industry experience, we’re here to help you 
          build production-ready, mobile-friendly, scalable Dash applications.
        </h3>
        <br/><br/>
        <h2><Link href='#contact'><a>Contact us now</a></Link></h2>
      </div>
    </div>
  </Section>
)

export default Landing
