import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'

const ServiceCardInfo = [
  {
    title: 'Consulting',
    desc: "Get ahead of the curve with industry secrets from our team of leading experts. Grab yourself a cup of coffee and let's collaborate.",
  },
  {
    title: 'Development',
    desc: 'We build elegant scalable apps for any industry. We sharpen your code, protect your data, and package each app in a mobile-friendly experience.',
  },
  {
    title: 'Deployment',
    desc: 'Ensure your app runs securely on your trusted server, and database. We handle Dash Enterprise, AWS, GCP, Heroku, and the list goes on.',
  },
]

function displayServiceCard(ServiceCard, i) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pl-md-3 pr-md-3 pt-sm-3 pb-sm-3" style={styles.card} key={i}>
      <div style={styles.cardContent}>
        <h5 style={styles.cardContentTitle}>{ServiceCard.title}</h5>
        <p style={styles.cardContentDesc}>{ServiceCard.desc}</p>
      </div>
    </div>
  )
}

const Services = () => (
  <Section id="services">
    <SectionContentBlock heading="Services" />
    <div className="row no-gutters">{ServiceCardInfo.map((ServiceCard, i) => displayServiceCard(ServiceCard, i))}</div>
  </Section>
)

export default Services

const styles = {
  card: {
    transition: 'all 0.3s ease 0s',
  },
  cardContent: {
    margin: '20px 0 0 0',
  },
  cardContentTitle: {
    marginBottom: '5px',
  },
  cardContentDesc: {
    marginBottom: '10px',
  },
}
