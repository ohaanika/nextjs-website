import Link from 'next/link'
import Image from 'next/image'
import PlaceholderClientLogo from '../components/placeholders/placeholderClientLogo'
import Section from '../components/section'

const clientLogoInfo = [
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
  {
    img: "",
    link: '#',
    label: 'CompanyName',
  },
]

function displayClientLogo(ClientLogo, i) {
  let image = null
  if (ClientLogo.img == "") {
    image = <PlaceholderClientLogo/>
  } else {
    image = <Image
      src={ClientLogo.img}
      width="100%" 
      height="100%" 
      layout="responsive" 
      objectFit="cover"
    />
  }

  return (
    <div classname="col-2" key={i}>{image}</div>
  )
}

const ClientLogos = () => (
  <Section backgroundColor="var(--color-border)">
    <center><h5>The Company We Keep</h5></center>
      <div className="row no-gutters justify-content-around align-content-around mt-4">
        {clientLogoInfo.map((ClientLogo, i) => displayClientLogo(ClientLogo, i))}
      </div>
  </Section>
)

export default ClientLogos
