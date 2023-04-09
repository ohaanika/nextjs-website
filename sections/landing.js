import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/section/section'

const Landing = () => (
  <Section id="landing-page" backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div className="col-lg-5 col-md-12 col-sm-12">
        <div className="landing-page-logo-container">
          <Image
            className="landing-page-logo"
            src={'/images/logos/textured-logo.svg'}
            alt="logo"
            layout="fill"
            objectPosition="right"
          />
        </div>
      </div>

      <div className="col-lg-7 col-md-12 col-sm-12">
        <h2>Dash Apps by the Experts</h2>
        <h3 style={{ fontWeight: 300, textTransform: 'none', fontSize: '1.4rem', lineHeight: '1.9rem', paddingTop: '2rem'}}>
          We design, code, and deploy your Dash apps,<br/> with 7+ years of leading insights and <br/> an interdisciplinary approach.
        </h3>
        <br />
        <br />
        <h2>
          <Link href="#contact">
            <a className="cta-button-landing-page">Get in touch</a>
          </Link>
        </h2>
      </div>
    </div>
  </Section>
)

export default Landing


// With over 7 years of leading industry experience, we design, code, and scale your Dash apps. production-ready, mobile-friendly, scalable Dash applications.