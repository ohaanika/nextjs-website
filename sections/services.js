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
    desc: "We code up your Dash apps from start to finish: MVPs, landing pages, scientific exploration tools are among our flavors. We even use Dash Design Kit for power users.",
  },
  {
    title: "Data-Driven Design",
    icon: "/images/icons/pencil-solid.svg",
    desc: "Unlock meaningful insights from your data with the right designs. We help you design your charts, user flow, and all the custom CSS. ",
  },
  {
    title: "Code Review",
    icon: "/images/icons/code-branch-solid.svg",
    desc: "Ensure you’re using best Dash practices. We bulletproof your callbacks for speed and performance, and meticulously code help test all the edge cases.",
  },
  {
    title: "Pair Programming",
    icon: "/images/icons/lightbulb-solid.svg",
    desc: "We also brainstorm features and work along side you in your coding environment. We’re a quick Slack huddle away.",
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
