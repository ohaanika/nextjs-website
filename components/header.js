import Link from 'next/link'
import Image from 'next/image'

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
    path: '/#stories',
    label: 'Stories',
  },
  {
    path: '/#portfolio',
    label: 'Portfolio',
  },
  {
    path: '/blog',
    label: 'Blog',
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
    <div
      style={{
        height: 'calc(var(--website-container-border) - 20px)',
        width: '100px',
        position: 'relative',
      }}
    >
      <Link href="/">
        <a>
          <Image src={'/images/logos/logo-name-black.svg'} layout="fill" objectFit="contain" objectPosition="left" />
        </a>
      </Link>
    </div>
    <nav>
      <ul>{navLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}</ul>
    </nav>
  </header>
)

export default Header
