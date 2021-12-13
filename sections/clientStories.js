import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import Carousel from '../components/carousel/carousel'

const clientStoryInfo = [
  {
    name: "Bob Ross",
    role: "Painter",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Jane Street",
    logoImg: "/images/clients/logo-janestreet.png",
  },
  {
    name: "Elon Musk",
    role: "CEO",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
    ],
    company: "HydroQuebec",
    logoImg: "/images/clients/logo-hq.svg",
  },
  {
    name: "Chelsea Kauai",
    role: "Creative",
    story: [
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Carbon Tracker",
    logoImg: "/images/clients/logo-ct.svg",
  },
  {
    name: "Bob Ross",
    role: "Painter",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Jane Street",
    logoImg: "/images/clients/logo-janestreet.png",
  },
  {
    name: "Elon Musk",
    role: "CEO",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
    ],
    company: "HydroQuebec",
    logoImg: "/images/clients/logo-hq.svg",
  },
  {
    name: "Chelsea Kauai",
    role: "Creative",
    story: [
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Carbon Tracker",
    logoImg: "/images/clients/logo-ct.svg",
  },
  {
    name: "Bob Ross",
    role: "Painter",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Jane Street",
    logoImg: "/images/clients/logo-janestreet.png",
  },
  {
    name: "Elon Musk",
    role: "CEO",
    story: [
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
    ],
    company: "HydroQuebec",
    logoImg: "/images/clients/logo-hq.svg",
  },
  {
    name: "Chelsea Kauai",
    role: "Creative",
    story: [
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
      "Donec semper in sapien tincidunt accumsan. Pellentesque dignissim ante eu eros malesuada bibendum.",
      "Nunc quis mollis velit, in bibendum ipsum. Mauris non nulla eu eros finibus rutrum. Nam a facilisis est, nec feugiat purus.",
      "Suspendisse scelerisque nec nisi eu tempus. Nulla vehicula velit sit amet metus interdum venenatis. Curabitur ornare consequat nisi non iaculis.",
    ],
    company: "Carbon Tracker",
    logoImg: "/images/clients/logo-ct.svg",
  },
]

function createClientStoryCard(ClientStoryCard, i) {
  let story = null
  if (Array.isArray(ClientStoryCard.story)) {
    story = ClientStoryCard.story.map((storyPara, i) => (<p key={i} style={styles.cardContentStoryPara}>{storyPara}</p>))
  }

  return (
    <div style={styles.cardContent} key={i}>
      <div>{story}</div>
      <h6 style={styles.cardContentName}>{ClientStoryCard.name}</h6>
      <h6 style={styles.cardContentRole}>{ClientStoryCard.role}</h6>
    </div>
  )
}

const ClientStories = () => (
  <Section id="stories" stretch={true}>
    <SectionContentBlock 
      heading="Client Stories"
      subheading="Are we worth it? Hear what our clients have to say."
    />
    <Carousel 
      carouselCardList={clientStoryInfo.map((ClientStoryCard, i) => createClientStoryCard(ClientStoryCard, i))}
    />
  </Section>
)

export default ClientStories

const styles = {
  cardContent: {
    margin: "20px",
  },
  cardContentName: {
    marginTop: "20px",
  },
  cardContentRole: {
    color: "var(--color-primary)",
  },
  cardContentStoryPara: {
    marginBottom: "10px",
  },
}
