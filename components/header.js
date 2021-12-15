import Link from 'next/link'
import Image from 'next/image'
import PlaceholderLogo from "./placeholders/placeholderLogo"

const navLinkInfo = [
  {
    path: '#services',
    label: 'Services',
  },
  {
    path: '#about',
    label: 'About',
  },
  {
    path: '#team',
    label: 'Team',
  },
  {
    path: '#portfolio',
    label: 'Portfolio',
  },
  {
    path: '#stories',
    label: 'Stories',
  },
  {
    path: '#contact',
    label: 'Contact',
    cta: true,
  },
]

function displayNavLink(navLink, i) {
  var link = <Link href={navLink.path}><a>{navLink.label}</a></Link>
  // if ('cta' in navLink && navLink.cta) {
  //   link = <button>{link}</button>
  // }
  // if ('cta' in navLink && navLink.cta) {
  //   link = <span style={{color: "var(--color-primary)"}}>{link}</span>
  // }
  var link = <li key={i}>{link}</li>
  return link
}

const Header = () => (
  <header>
    <div style={{height: "calc(var(--website-container-border) - 20px)", width: "100px", position: "relative"}}>
      <Image
        src={"/images/logos/logo-name-black.svg"}
        layout="fill" 
        objectFit="contain"
        objectPosition="left"
      />
    </div>
    <nav>
      <ul>
        {navLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}
      </ul>
    </nav>
  </header>
)

export default Header
