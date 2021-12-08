import Link from 'next/link'
import PlaceholderLogo from "./placeholders/placeholderLogo"

const navItems = [
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
    path: '#testimonials',
    label: 'Testimonials',
  },
  {
    path: '#contact',
    label: 'Contact',
    cta: true,
  },
]

function createNavLink(navItem, i) {
  var navLink = <Link href={navItem.path}><a>{navItem.label}</a></Link>
  if ('cta' in navItem && navItem.cta) {
    navLink = <button>{navLink}</button>
  }
  var navLink = <li key={i}>{navLink}</li>
  return navLink
}

const Header = () => (
  <header>
    <div>
      <PlaceholderLogo/>
    </div>
    <nav>
      <ul>
        {navItems.map((navItem, i) => createNavLink(navItem, i))}
      </ul>
    </nav>
  </header>
)

export default Header
