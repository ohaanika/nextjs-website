import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <ul className='menu'>
        <li className='logo'>
          <Link href='#'><a>Zyphr</a></Link>
        </li>
        <li className='item'>
          <Link href='#services'><a>Services</a></Link>
        </li>
        <li className='item'>
          <Link href='#about-us'><a>About Us</a></Link>
        </li>
        <li className='item'>
          <Link href='#team'><a>Team</a></Link>
        </li>
        <li className='item'>
          <Link href='#portfolio'><a>Portfolio</a></Link>
        </li>
        <li className='item button'>
          <Link href='#contact-us'><a>Contact Us</a></Link>
        </li>
        <li className='toggle'>
          <a><i className='fas fa-bars'></i></a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
