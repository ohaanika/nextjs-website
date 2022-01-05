import Link from 'next/link'

const CalloutButton = ({ text = 'Click here', url = '' }) => {
  let callout = <button>{text}</button>
  if (url != '') {
    callout = (
      <Link href={url}>
        <a style={{ textDecoration: 'none' }}>{callout}</a>
      </Link>
    )
  }
  return callout
}

export default CalloutButton
