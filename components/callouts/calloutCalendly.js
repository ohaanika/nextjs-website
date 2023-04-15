import { openPopupWidget } from 'react-calendly'

const CalloutCalendly = ({ url, prefill, pageSettings, utm, text }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

  return <button className="calendly-button" onClick={onClick}>{text}</button>
}

export default CalloutCalendly
