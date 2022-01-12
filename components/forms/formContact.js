import { useState } from 'react'
import styles from './formContact.module.css'

const FormContact = () => {
  const label_required = <span style={{ color: 'var(--color-primary)' }}>{'﹡'}</span>

  const [name, setName] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [method, setMethod] = useState('default')
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    setLoading(true)
    try {
      const formData = new FormData()

      if (!name.trim()) {
        throw new Error('Please provide a valid name.')
      }
      if (!affiliation.trim()) {
        throw new Error('Please provide a valid affiliation.')
      }
      if (!email.trim()) {
        throw new Error('Please provide a valid email address.')
      }
      if (!message.trim()) {
        throw new Error('Please provide a valid message.')
      }
      if (!method.trim()) {
        throw new Error('Please provide a valid dropdown input for how you found about us.')
      }

      formData.append('name', name)
      formData.append('affiliation', affiliation)
      formData.append('email', email)
      formData.append('message', message)
      formData.append('method', method)

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const responseData = await response.json()

      if (responseData.error) {
        console.log('Error:')
        throw new Error(responseData.error)
      }

      console.log('Success!')

      setName('')
      setAffiliation('')
      setEmail('')
      setMessage('')
      setMethod('')
    } catch (error) {
      console.log('Error:')
      throw new Error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.form}>
      <form name="contact-form" method="POST" action="contact/?success=true" onSubmit={sendEmail}>
        <fieldset>
          <label htmlFor="name">Name {label_required}</label>
          <input id="name" name="name" type="text" placeholder="Your full name..." required value={name} onChange={(e) => setName(e.target.value)} />
        </fieldset>
        <fieldset>
          <label htmlFor="affiliation">Affiliation {label_required}</label>
          <input id="affiliation" name="affiliation" type="text" placeholder="Your affiliation..." required value={affiliation} onChange={(e) => setAffiliation(e.target.value)} />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email {label_required}</label>
          <input id="email" name="email" type="email" placeholder="Your email address..." required value={email} onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message {label_required}</label>
          <textarea id="message" name="message" type="text" placeholder="Write your message here..." required value={message} onChange={(e) => setMessage(e.target.value)} />
        </fieldset>
        <fieldset>
          <label htmlFor="method">How did you hear about us?</label>
          <select name="method" id="method" value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="default" disabled>
              -- Select an Option --
            </option>
            <option value="Plotly">Plotly</option>
            <option value="Recommendation">Recommendation</option>
            <option value="Google">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </fieldset>
        <button type="submit" value="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default FormContact
