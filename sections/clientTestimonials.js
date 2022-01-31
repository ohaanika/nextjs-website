import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'
import Carousel from '../components/carousel/carousel'

const clientTestimonialInfo = [
  {
    name: 'Laurier',
    role: 'Network Engineer at Hydro-Quebec',
    testimonial: [
      'With the clever algorithm and component Zyphr delivered, I feel like I have all the tools at my disposal to make [my] vision a reality. I am still amazed at everything that has been done in such a short time.',
    ],
  },
  {
    name: "Niall O'Dowd Ph.D",
    role: 'CEO of Additive Monitoring Systems',
    testimonial: ['Zyphr worked with us to understand the kernel of the needed application, and aided in the brainstorming process to deliver a product which smartly used system constraints'],
  },
  {
    name: 'Kyle Owens',
    role: 'CEO at Trendline',
    testimonial: [
      "It's not hyperbole to say that we would not be where we are as a company without Zyphr's support. Their thorough understanding of the platform is a key asset, but it's their obsessive attention to detail that sets them apart.",
    ],
  },
]

function createClientTestimonialCard(ClientTestimonialCard, i) {
  let testimonial = null
  if (Array.isArray(ClientTestimonialCard.testimonial)) {
    testimonial = ClientTestimonialCard.testimonial.map((testimonialPara, i) => (
      <p key={i} style={styles.cardContentTestimonialPara}>
        {testimonialPara}
      </p>
    ))
  }

  return (
    <div style={styles.cardContent} key={i}>
      <div>{testimonial}</div>
      <div>
        <h6 style={styles.cardContentName}>{ClientTestimonialCard.name}</h6>
        <h6 style={styles.cardContentRole}>{ClientTestimonialCard.role}</h6>
      </div>
    </div>
  )
}

const ClientTestimonials = () => (
  <Section id="stories" stretch={true} backgroundColor="var(--color-background-inner)">
    <SectionContentBlock heading="Are we worth it?" subheading="Hear what our clients have to say." />
    <Carousel carouselCardList={clientTestimonialInfo.map((ClientTestimonialCard, i) => createClientTestimonialCard(ClientTestimonialCard, i))} />
  </Section>
)

export default ClientTestimonials

const styles = {
  cardContent: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContentTestimonialPara: {
    marginBottom: '10px',
  },
  cardContentName: {
    marginTop: '10px',
  },
  cardContentRole: {
    color: 'var(--color-primary)',
  },
}
