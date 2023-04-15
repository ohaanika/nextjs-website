import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/section/section'

const Landing = () => (
  <Section backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div className="col-lg-5 col-md-12 col-sm-12">
        <Image src={'/images/logos/logo-icon-circle-animation.svg'} alt="logo" layout="fill" objectFit="cover" objectPosition="right"/>
      </div>

      <div className="col-lg-7 col-md-12 col-sm-12">
        <h2>Dash Apps <br/> by the Experts</h2>
        <h3 style={{ fontWeight: 300, textTransform: 'none', fontSize: '1.4rem', lineHeight: '1.9rem', paddingTop: '2rem'}}>
          We design, code, and deploy your Dash apps,<br/> with 7+ years of leading insights and <br/> an interdisciplinary approach.
        </h3>
        <br />
        <br />
        <h2>
          <Link href="#contact">
            <a style={{fontSize: '1.4rem', textDecoration: 'none', backgroundColor: 'var(--color-primary)', color: 'white', padding: "0.2rem 0.5rem", borderRadius: "0.3rem"}}>Get in touch</a>
          </Link>
        </h2>
      </div>
    </div>
  </Section>
)

export default Landing
