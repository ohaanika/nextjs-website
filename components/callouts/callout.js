import Link from 'next/link'

const Callout = ({ text = 'Click here', url = '' }) => {
  let callout = <h6 style={{ color: 'var(--color-primary)' }}>{text}</h6>
  if (url != '') {
    callout = (
      <Link href={url}>
        <a style={{ textDecoration: 'none' }} target="_blank">
          {callout}
        </a>
      </Link>
    )
  }
  return callout
}

export default Callout
