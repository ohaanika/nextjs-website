import Link from 'next/link'
import Section from '../components/section/section'
import CircleText from '../components/visuals/circleText'
// import GridDots from '../components/visuals/gridDots'
import Bar3D from '../components/visuals/bar3D'

const Landing = () => (
  <Section backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-2 p-0 pt-sm-5 d-lg-block d-md-none d-sm-none align-items-center">
        <h3>
          <CircleText color="var(--color-primary)">* Dash * Plotly *</CircleText>
        </h3>
        {/* <GridDots color="var(--color-background-outer)" radius={4*2/3}/> */}
        <div className="row align-items-end" style={{ position: 'absolute', top: '220px', left: '110px', gap: '17px' }}>
          <Bar3D color="var(--color-primary)" ratio={[1, 1]} />
          <Bar3D color="var(--color-primary)" ratio={[1, 2]} />
          <Bar3D color="var(--color-primary)" ratio={[1, 3]} />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 p-0">
        <h2>Dash Apps</h2>
        <h2>by the Experts</h2>
        <h3 style={{ fontWeight: 300, textTransform: 'none' }}>
          With over <b>5</b> years of leading industry experience, we’re here to help you build production-ready, mobile-friendly, scalable Dash applications.
        </h3>
        <br />
        <br />
        <h2>
          <Link href="#contact">
            <a>Get in touch</a>
          </Link>
        </h2>
      </div>
    </div>
  </Section>
)

export default Landing
