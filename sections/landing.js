import Link from 'next/link'
import Section from '../components/section/section'

const Landing = () => (
  <Section backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div>
        <h2>Dash Apps by the Experts</h2>
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
