import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'
import styles from './services.module.css'

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

const Services = () => (
  <Section id="services">
    <SectionContentBlock heading="Services" />
    <div className={styles.cardList}>
      {ServiceCardInfo.map((ServiceCard, i) => (
        <div className={styles.card} key={i}>
          <h5>{ServiceCard.title}</h5>
          <p>{ServiceCard.desc}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default Services
