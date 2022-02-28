import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'
import styles from './clientTestimonials.module.css'

const ClientTestimonialInfo = [
  {
    name: 'Laurier Demers',
    role: 'Engineer at Hydro-Québec',
    testimonial:
      'Coming soon to a website near you!',
  },
  {
    name: "Niall O'Dowd Ph.D",
    role: 'CEO of Additive Monitoring Systems',
    testimonial: 'Zyphr worked with us to understand the kernel of the needed application, and aided in the brainstorming process to deliver a product which smartly used system constraints',
  },
  {
    name: 'Kyle Owens',
    role: 'CEO at Trendline',
    testimonial:
      "It's not hyperbole to say that we would not be where we are as a company without Zyphr's support. Their thorough understanding of the platform is a key asset, but it's their obsessive attention to detail that sets them apart.",
  },
  {
    name: 'Nagarajan Sankrithi Ph.D',
    role: 'CTO at Healthcare Integrative Solutions',
    testimonial:
      'We got a referral from Plotly to work with Zyphr when we were looking for expert Dash Enterprise Solutions Partners. Zyphr team has incredibly talented Python developers that can guide you and help you realize your product vision. They cleaned up and brought structure and clarity to our stack with only high level requirements. We have benefitted from their structured thinking and this has enabled us to develop scalable solutions much faster. In essense, Zyphr is a great find.',
  },
]

const ClientTestimonials = () => (
  <Section id="stories" backgroundColor="var(--color-background-inner)">
    <SectionHeading>Are we worth it?</SectionHeading>
    <SectionContent>
      <p>Hear what our clients have to say.</p>
    </SectionContent>
    <div className={styles.cardList}>
      {ClientTestimonialInfo.map((ClientTestimonialCard, i) => (
        <div className={styles.card} key={i}>
          <p className={styles.testimonial}>
            {/* <span className={styles.quotes}>”</span>  */}
            {ClientTestimonialCard.testimonial}
          </p>
          <div>
            <h6>{ClientTestimonialCard.name}</h6>
            <h6 style={{ color: 'var(--color-primary)' }}>{ClientTestimonialCard.role}</h6>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export default ClientTestimonials
