import Link from 'next/link'
import Image from 'next/image'
import PlaceholderLogo from "./placeholders/placeholderLogo"

const navLinkInfo = [
  {
    path: '/#services',
    label: 'Services',
  },
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/#team',
    label: 'Team',
  },
  {
    path: '/#portfolio',
    label: 'Portfolio',
  },
  {
    path: '/#stories',
    label: 'Stories',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
]

function displayNavLink(navLink, i) {
  return (
    <li key={i}>
      <Link href={navLink.path}>
        <a>{navLink.label}</a>
      </Link>
    </li>
  )
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
