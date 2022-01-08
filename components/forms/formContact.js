import styles from './formContact.module.css'

const FormContact = () => {
  const label_required = <span style={{ color: 'var(--color-primary)' }}>{'﹡'}</span>

  return (
    <div className={styles.form}>
      <form name="contact-form" method="POST" action="contact/?success=true">
        <fieldset>
          <label htmlFor="name">Name {label_required}</label>
          <input id="name" name="name" type="text" placeholder="Your full name..." required />
        </fieldset>
        <fieldset>
          <label htmlFor="affiliation">Affiliation {label_required}</label>
          <input id="affiliation" name="affiliation" type="text" placeholder="Your affiliation..." required />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email {label_required}</label>
          <input id="email" name="email" type="email" placeholder="Your email address..." required />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message {label_required}</label>
          <textarea id="message" name="message" type="text" placeholder="Write your message here..." required />
        </fieldset>
        <fieldset>
          <label htmlFor="method">How did you hear about us?</label>
          <select name="method" id="method">
            <option disabled selected value>
              -- Select an Option --
            </option>
            <option value="plotly">Plotly</option>
            <option value="recommendation">Recommendation</option>
            <option value="google">Google Search</option>
            <option value="social-media">Social Media</option>
            <option value="other">Other</option>
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
