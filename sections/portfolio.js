import Link from 'next/link'
import Image from 'next/image'
import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import PlaceholderImage from '../components/placeholders/placeholderImage'

const PortfolioCardInfo = [
  {
    title: "Minty Budget App",
    desc: "Gain insights into your budgets and finances.",
    link: "https://minty-budget-tool.herokuapp.com/",
    img: "/images/portfolio/mint-app.png",
  },
  {
    title: "NYC Complaints",
    desc: "Dashboard of borough complaints, with an SQL and chart editor inside.",
    link: "https://dash-demo.plotly.host/dash-nyc-complaints/",
    img: "/images/portfolio/nyc-app.png",
  },
  {
    title: "Admin Panel",
    desc: "Manage the overall usage metrics of your Dash Enterprise server.",
    link: "https://dash-demo.plotly.host/dash-admin-panel/",
    img: "/images/portfolio/admin-app.png",
  },
  {
    title: "COVID-19 Interventions",
    desc: "Simulate the impact of custom non-pharmaceutical interventions on the dynamics of COVID-19.",
    link: "https://intervention-model.herokuapp.com/",
    img: "/images/portfolio/brightbuilding-cropped.jpg",
  },
]

function displayPortfolioCard(PortfolioCard, i) {
  let image = null
  if (PortfolioCard.img == "") {
    image = <PlaceholderImage/>
  } else {
    image = <Image
      src={PortfolioCard.img}
      width="100%" 
      height="60px"
      layout="responsive" 
      objectFit="cover"
    />
  }

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pl-md-3 pr-md-3 pt-sm-3 pb-sm-3" style={styles.card} key={i}>
      <div style={styles.cardImage}>
        {image}
      </div>
      <div style={styles.cardContent}>
        <h5 style={styles.cardContentTitle}>{PortfolioCard.title}</h5>
        <p style={styles.cardContentDesc}>{PortfolioCard.desc}</p>
        <Link href={PortfolioCard.link}>Check out app →</Link>
      </div>
    </div>
  )
}

const Portfolio = () => (
  <Section id="portfolio">
    <div className="row no-gutters">
        <SectionContentBlock 
          heading="Portfolio"
          subheading="Check out some of our Interactive Apps"
        >
          <div className="row no-gutters">
            {PortfolioCardInfo.map((PortfolioCard, i) => displayPortfolioCard(PortfolioCard, i))}
          </div>
        </SectionContentBlock>
    </div>
  </Section>
)

export default Portfolio

const styles = {
  card: {
    // backgroundColor: 'var(--color-background-secondary)',
    transition: 'all 0.3s ease 0s',
    // flexBasis: "23%", flexGrow: 0,
  },
  cardImage: {
    border: '2px solid #eee',
  },
  cardContent: {
    margin: '20px 0 0 0',
  },
  cardContentTitle: {
    marginBottom: '5px',
    // textAlign: "center",
  },
  cardContentDesc: {
    marginBottom: '10px',
    // textAlign: "center",
  },
}
