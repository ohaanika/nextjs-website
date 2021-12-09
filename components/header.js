import Link from 'next/link'
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
  if ('cta' in navLink && navLink.cta) {
    link = <button>{link}</button>
  }
  var link = <li key={i}>{link}</li>
  return link
}

const Header = () => (
  <header>
    <div>
      <PlaceholderLogo/>
    </div>
    <nav>
      <ul>
        {navLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}
      </ul>
    </nav>
  </header>
)

export default Header
