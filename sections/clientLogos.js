import Link from 'next/link'
import Image from 'next/image'
import PlaceholderClientLogo from '../components/placeholders/placeholderClientLogo'
import Section from '../components/section'

const clientLogoInfo = [
  {
    label: 'JaneStreet',
    img: "/images/clients/logo-janestreet.png",
    link: 'https://www.janestreet.com/',
  },
  {
    label: 'RenMac',
    img: "/images/clients/logo-renmac.png",
    link: 'https://www.renmac.com/',
  },
  {
    label: 'Hydro-Québec',
    img: "/images/clients/logo-hq.svg",
    link: 'https://www.hydroquebec.com/',
  },
  {
    label: 'CarbonTracker',
    img: "/images/clients/logo-ct.svg",
    link: 'https://carbontracker.org/',
  },
  {
    label: 'Healthcare Integrative Solutions',
    img: "/images/clients/logo-his.png",
    link: 'https://healthcareintegrative.com/',
  },
]

function displayClientLogo(ClientLogo, i) {
  let image = null
  if (ClientLogo.img == "") {
    image = <PlaceholderClientLogo/>
  } else {
    image = <Image
      src={ClientLogo.img}
      layout="fill" 
      objectFit="contain"
    />
  }

  return (
    <div className="col-md-2 col-sm-12 mt-md-0 mb-md-0 ml-sm-0 mr-sm-0 m-2 justify-content-center align-content-center align-items-center" key={i}>
      <Link href={ClientLogo.link}><a target="_blank">{image}</a></Link>
    </div>
  )
}

const ClientLogos = () => (
  <Section backgroundColor="var(--color-background-secondary)">
    <center><h5>The Company We Keep</h5></center>
      <div className="row no-gutters justify-content-around align-content-around flex-wrap mt-5">
        {clientLogoInfo.map((ClientLogo, i) => displayClientLogo(ClientLogo, i))}
      </div>
  </Section>
)

export default ClientLogos
