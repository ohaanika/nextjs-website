import Link from 'next/link'
import Section from '../components/section'
import CircleText from '../components/visuals/circleText'
import GridDots from '../components/visuals/gridDots'

const Landing = () => (
  <Section id="team">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-2 p-0 pt-sm-5 d-lg-block d-sm-none align-items-center">
        {/* <h3><CircleText color="var(--color-primary)">* Dash * Plotly *</CircleText></h3> */}
        <GridDots/>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 p-0">
        <h2>Professional Dash Apps by the Experts</h2>
        <h3 style={{fontWeight: 300, textTransform: "none"}}>
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
