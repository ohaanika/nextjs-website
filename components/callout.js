import Link from 'next/link'

const Callout = ({ label = 'Click here', link = '' }) => {
  let callout = <h6 style={{ color: 'var(--color-primary)' }}>{label}</h6>
  if (link != '') {
    callout = (
      <Link href={link}>
        <a style={{ textDecoration: 'none' }}>{callout}</a>
      </Link>
    )
  }
  return callout
}

export default Callout
