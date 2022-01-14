import Link from 'next/link'
import Image from 'next/image'

const navLinkInfo = [
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/#team',
    label: 'Team',
  },
  {
    path: '/#services',
    label: 'Services',
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
    <Link href="/">
      <a>
        <div
          style={{
            height: 'calc(var(--website-container-border) - 20px)',
            width: '100px',
            position: 'relative',
          }}
        >
          <Image src={'/images/logos/logo-name-black.svg'} layout="fill" objectFit="contain" objectPosition="left" />
        </div>
      </a>
    </Link>
    <nav>
      <ul>{navLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}</ul>
    </nav>
  </header>
)

export default Header
