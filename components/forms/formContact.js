import { useState } from 'react'
import styles from './formContact.module.css'

const FormContact = () => {
  const label_required = <span style={{ color: 'var(--color-primary)' }}>{'﹡'}</span>

  const [form, setForm] = useState({ state: '', message: '' })

  const [inputs, setInputs] = useState({
    name: '',
    affiliation: '',
    email: '',
    message: '',
    method: '',
  })

  const handleInputsChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (inputs.name && inputs.affiliation && inputs.email && inputs.message && inputs.method) {
      setForm({ state: 'loading', message: 'Sending...' })
      try {
        const formData = new FormData()
        formData.append('name', inputs.name)
        formData.append('affiliation', inputs.affiliation)
        formData.append('email', inputs.email)
        formData.append('message', inputs.message)
        formData.append('method', inputs.method)
        
        const res = await fetch(`api/contact`, {
          method: 'POST',
          body: formData,
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        })

        setInputs({
          name: '',
          affiliation: '',
          email: '',
          message: '',
          method: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: error.message,
        })
      }
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label htmlFor="name">Name {label_required}</label>
          <input id="name" name="name" type="text" placeholder="Your full name..." required value={inputs.name} onChange={handleInputsChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="affiliation">Affiliation {label_required}</label>
          <input id="affiliation" name="affiliation" type="text" placeholder="Your affiliation..." required value={inputs.affiliation} onChange={handleInputsChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email {label_required}</label>
          <input id="email" name="email" type="email" placeholder="Your email address..." required value={inputs.email} onChange={handleInputsChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message {label_required}</label>
          <textarea id="message" name="message" type="text" placeholder="Write your message here..." required value={inputs.message} onChange={handleInputsChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="method">How did you hear about us? {label_required}</label>
          <select name="method" id="method" required value={inputs.method} onChange={handleInputsChange}>
            <option value="" disabled>
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
        <div className={styles.alert} style={form.message ? {} : { display: 'none' }}>
          {form.message}
        </div>
      </form>
    </div>
  )
}

export default FormContact
