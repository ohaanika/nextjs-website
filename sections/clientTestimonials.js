import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'
import Carousel from '../components/carousel/carousel'

const clientTestimonialInfo = [
  {
    name: 'Bob Ross',
    role: 'Painter',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Jane Street',
  },
  {
    name: 'Elon Musk',
    role: 'CEO',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
    ],
    company: 'HydroQuebec',
  },
  {
    name: 'Chelsea Kauai',
    role: 'Creative',
    testimonial: [
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Carbon Tracker',
  },
  {
    name: 'Bob Ross',
    role: 'Painter',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Jane Street',
  },
  {
    name: 'Elon Musk',
    role: 'CEO',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
    ],
    company: 'HydroQuebec',
  },
  {
    name: 'Chelsea Kauai',
    role: 'Creative',
    testimonial: [
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Carbon Tracker',
  },
  {
    name: 'Bob Ross',
    role: 'Painter',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Jane Street',
  },
  {
    name: 'Elon Musk',
    role: 'CEO',
    testimonial: [
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
    ],
    company: 'HydroQuebec',
  },
  {
    name: 'Chelsea Kauai',
    role: 'Creative',
    testimonial: [
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
      'Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.',
      'Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.',
      'Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.',
    ],
    company: 'Carbon Tracker',
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
