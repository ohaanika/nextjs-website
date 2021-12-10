const FormFieldInfo = [
  {
    label: "Name",
    id: "name",
    wrapper: "input",
    type: "text",
    required: true,
    placeholder: "Your full name...",
  },
  {
    label: "Affiliation",
    id: "affiliation",
    wrapper: "input",
    type: "text",
    required: true,
    placeholder: "Your affiliation...",
  },
  {
    label: "Email",
    id: "email",
    wrapper: "input",
    type: "email",
    required: true,
    placeholder: "Your email address...",
  },
  {
    label: "Message",
    id: "message",
    wrapper: "textarea",
    type: "text",
    required: true,
    placeholder: "Write your message here...",
  },
]

function displayFormField(FormField, i=null) {
  let label_required = <span style={{color: "var(--color-primary)"}}>
    {(FormField.required === true) ? '﹡' : ''}
  </span>

  return (
    <div key={i}>
      <div className="row pb-2">
        <label htmlFor={FormField.id}>{FormField.label} {label_required}</label>
      </div>
      <div className="row pb-4">
        <FormField.wrapper 
          id={FormField.id} 
          name={FormField.id} 
          type={FormField.type} 
          placeholder={FormField.placeholder}
          required
        />
      </div>
    </div>
  )
}

const FormContact = () => {
  return (
    <div className="p-5" style={styles.formContact}>
      <form name="contact-form" method="POST" action="contact/?success=true">
          {FormFieldInfo.map((FormField, i) => displayFormField(FormField, i))}
          <div>
            <div className="row pb-2">
              <h6><label for="method">How did you hear about us?</label></h6>
            </div>
            <div className="row pb-4">
              <select name="method" id="method">
                <option disabled selected value> -- Select an Option -- </option>
                <option value="recommendation">Recommendation</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
              </select>
            </div>
          </div>
          <button type="submit" value="submit">Send</button>
      </form>
    </div>
  )
}

export default FormContact

const styles = {
  formContact: {
    backgroundColor: 'var(--color-primary-light)',
    // border: '2px solid var(--color-border)',
  },
}
