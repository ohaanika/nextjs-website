import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'
import styles from './services.module.css'
import Link from 'next/link'
import Image from 'next/image'


const ServiceCardInfo = [
  {
    title: "Dashboard Development",
    icon: "/images/icons/tablet-screen-button-solid.svg",
    desc: "We code up your Dash apps from start to finish: MVPs, dashboards, and scientific tools are among our products. We even use Dash Design Kit for power users.",
  },
  {
    title: "Data-Driven Design",
    icon: "/images/icons/pencil-solid.svg",
    desc: "Unlock meaningful insights from your data with the right designs. We help you pick your visualizations, route intuitive user flows, and handle all detailed CSS.",
  },
  {
    title: "Code Review",
    icon: "/images/icons/code-branch-solid.svg",
    desc: "Ensure you're using the best Dash practices. We bulletproof your callbacks for optimal performance, and adhere to PEP-8 Python standards.",
  },
  {
    title: "Pair Programming",
    icon: "/images/icons/lightbulb-solid.svg",
    desc: "We can brainstorm features and work together in your tech stack of choice. We’re a quick Slack huddle away.",
  },
]

const Services = () => (
  <Section id="services">
    <SectionHeading>Services</SectionHeading>
    <SectionContent>
      <p>Find out how we can work together. 👀</p>
    </SectionContent>
    <div className={styles.cardList}>
      {ServiceCardInfo.map((ServiceCard, i) => (
        <div className={styles.card} key={i}>

          <h5 className="service-card-title">
            <div className="services-icon-container">
              <Image src={ServiceCard.icon} layout="fill"/>
            </div>
            {ServiceCard.title}
          </h5>

          <p>{ServiceCard.desc}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default Services
