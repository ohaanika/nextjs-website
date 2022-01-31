import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'
import styles from './clientTestimonials.module.css'

const ClientTestimonialInfo = [
  {
    name: 'Laurier',
    role: 'Network Engineer at Hydro-Quebec',
    testimonial:
      'With the clever algorithm and component Zyphr delivered, I feel like I have all the tools at my disposal to make [my] vision a reality. I am still amazed at everything that has been done in such a short time.',
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
]

const ClientTestimonials = () => (
  <Section id="stories" backgroundColor="var(--color-background-inner)">
    <SectionContentBlock heading="Are we worth it?" subheading="Hear what our clients have to say." />
    <div className={styles.cardList}>
      {ClientTestimonialInfo.map((ClientTestimonialCard, i) => (
        <div className={styles.card} key={i}>
          <p>{ClientTestimonialCard.testimonial}</p>
          <h6>{ClientTestimonialCard.name}</h6>
          <h6 style={{ color: 'var(--color-primary)' }}>{ClientTestimonialCard.role}</h6>
        </div>
      ))}
    </div>
  </Section>
)

export default ClientTestimonials
