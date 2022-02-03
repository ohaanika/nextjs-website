import Link from 'next/link'
import Image from 'next/image'
import PlaceholderClientLogo from '../components/placeholders/placeholderClientLogo'
import Section from '../components/section/section'

const clientLogoInfo = [
  {
    label: 'Trendline',
    image: '/images/clients/logo-trendline.png',
    link: 'https://www.trendlineinsights.com/',
  },
  {
    label: 'Healthcare Integrative Solutions',
    image: '/images/clients/logo-his.png',
    link: 'https://healthcareintegrative.com/',
  },
  {
    label: 'Home Nursing and Therapy Services',
    image: '/images/clients/logo-hnts.png',
    link: 'https://www.hnts.org/',
  },
]

function displayClientLogo(ClientLogo, i) {
  let image = null
  if (ClientLogo.image) {
    image = <Image src={ClientLogo.image} layout="fill" objectFit="contain" />
  } else {
    image = <PlaceholderClientLogo />
  }

  return (
    <div key={i}
    className="col-md-2 col-sm-12 mt-md-0 mb-md-0 ml-sm-0 mr-sm-0 m-2 justify-content-center align-content-center align-items-center"
    style={styles.logoImage}>
      <Link href={ClientLogo.link}><a target="_blank">{image}</a></Link>
    </div>
  )
}

const ClientLogos = () => (
  <Section backgroundColor="var(--color-background-inner)">
    <center>
      <h5>The Company We Keep</h5>
    </center>
    <div className="row no-gutters justify-content-around align-content-around flex-wrap mt-5">{clientLogoInfo.map((ClientLogo, i) => displayClientLogo(ClientLogo, i))}</div>
  </Section>
)

export default ClientLogos

const styles = {
  logoImage: {
    // position: 'relative',
    filter: 'gray' /* IE6-9 */,
    WebkitFilter: 'grayscale(1) contrast(0) brightness(0)' /* Google Chrome, Safari 6+ & Opera 15+ */,
    filter: 'grayscale(1) contrast(0) brightness(0)' /* Microsoft Edge and Firefox 35+ */,
  },
}
