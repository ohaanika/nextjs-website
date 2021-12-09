import Link from 'next/link'
import Section from '../components/section'

const Landing = () => (
  <Section>
    <h3>Professional Dash Apps by the Experts</h3>
    <p>
      With over 5 years of leading industry experience, we’re here to help you 
      build production-ready, mobile-friendly, scalable Dash applications.
    </p>
    <button><Link href='#contact'><a>Contact</a></Link></button>
  </Section>
)

export default Landing
