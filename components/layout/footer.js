import Image from 'next/image'

const SocialMediaIconInfo = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/zyphr-solutions-inc/',
    img: '/images/icons/social-linkedin.svg',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/zyphr-solutions',
    img: '/images/icons/social-medium.svg',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/zyphr-solutions/',
    img: '/images/icons/social-github.svg',
  },
]

function displaySocialMediaIcon(SocialMediaIcon, i) {
  return (
    <a key={i} href={SocialMediaIcon.link} target="_blank">
      <div
        style={{
          position: 'relative',
          height: '1.2em',
          width: '1.2em',
          marginLeft: '10px',
        }}
      >
        <Image src={SocialMediaIcon.img} alt={SocialMediaIcon.name} layout="fill" objectFit="contain" objectPosition="right" />
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

const Footer = () => {
  // const handleScrollBottom = (e) => {
  //   if(e.target.scrollTop() < 100) {
  //       e.target.fadeOut(1000);
  //   } else {
  //       e.target.fadeIn(1000);
  //   }
  // }

  return (
    <footer>
      <div>{displayEmail()}</div>
      {/* <div onScroll={handleScrollBottom}>{displayCopyrightMessage()}</div> */}
      <div className="icons">{SocialMediaIconInfo.map((SocialMediaIcon, i) => displaySocialMediaIcon(SocialMediaIcon, i))}</div>
    </footer>
  )
}

export default Footer
