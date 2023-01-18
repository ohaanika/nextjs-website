import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/section/section'

const Landing = () => (
  <Section backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <Image src={'/images/logos/logo-icon.svg'} layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <h2>Dash Apps by the Experts</h2>
        <h3 style={{ fontWeight: 300, textTransform: 'none', fontSize: '1.7rem' }}>
          With over 5 years of leading industry experience, we’re here to help you build production-ready, mobile-friendly, scalable Dash applications.
        </h3>
        <br />
        <br />
        <h2>
          <Link href="#contact">
            <a style={{fontSize: '1.7rem', textDecoration: 'none', backgroundColor: 'var(--color-primary)', color: 'white', padding: "0.3rem 0.6rem", borderRadius: "0.5rem"}}>Get in touch</a>
          </Link>
        </h2>
      </div>
    </div>
  </Section>
)

export default Landing
