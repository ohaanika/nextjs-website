import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.css'

const NavLinkInfo = [
  {
    name: 'About',
    path: '/#about',
  },
  {
    name: 'Team',
    path: '/#team',
  },
  {
    name: 'Services',
    path: '/#services',
  },
  // {
  //   name: 'Clients',
  //   path: '/clients',
  // },
  {
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/#contact',
  },
]

const SocialMediaIconInfo = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/zyphr-solutions-inc/',
    image: '/images/icons/social-linkedin.svg',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/zyphr-solutions',
    image: '/images/icons/social-medium.svg',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/zyphr-solutions/',
    image: '/images/icons/social-github.svg',
  },
]

function displayNavLink(navLink, i) {
  return (
    <li key={i}>
      <Link href={navLink.path}>
        <a>{navLink.name}</a>
      </Link>
    </li>
  )
}

function displaySocialMediaIcon(SocialMediaIcon, i) {
  return (
    <a key={i} href={SocialMediaIcon.link} target="_blank">
      <div className={styles.icon}>
        <Image src={SocialMediaIcon.image} alt={SocialMediaIcon.name} layout="fill" objectFit="contain" objectPosition="right" />
      </div>
    </a>
  )
}

function displayCopyrightMessage() {
  let currentYear = new Date().getFullYear()
  return <p>© {currentYear} Zyphr Solutions Inc. All Rights Reserved.</p>
}

function displayEmail() {
  return (
    <a style={{ textDecoration: 'none', color: 'var(--color-text)' }} href="mailto:zyphr.form@gmail.com">
      zyphr.form@gmail.com
    </a>
  )
}

const Layout = (props) => {
  // const handleScrollBottom = (e) => {
  //   if(e.target.scrollTop() < 100) {
  //       e.target.fadeOut(1000);
  //   } else {
  //       e.target.fadeIn(1000);
  //   }
  // }

  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Image src={'/images/logos/logo-name-black.svg'} layout="fill" objectFit="contain" objectPosition="left" />
            </div>
          </a>
        </Link>
        <nav>
          <ul>{NavLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}</ul>
        </nav>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <div>{displayEmail()}</div>
        {/* <div onScroll={handleScrollBottom}>{displayCopyrightMessage()}</div> */}
        <div className={styles.icons}>{SocialMediaIconInfo.map((SocialMediaIcon, i) => displaySocialMediaIcon(SocialMediaIcon, i))}</div>
      </footer>
    </div>
  )
}

export default Layout
