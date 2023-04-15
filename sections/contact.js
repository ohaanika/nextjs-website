import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'
import FormContact from '../components/forms/formContact'
import CalloutCalendly from '../components/callouts/calloutCalendly'

const Contact = () => (
  <Section id="contact">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <SectionHeading>Contact Us</SectionHeading>
        <SectionContent>
          <p>
          Let’s talk about your project! 🤝<br/><br/>Book a call or message us here and let us know what you have in mind.
          </p>
          <CalloutCalendly url="https://calendly.com/zyphr-form/15min" text="Book a call on Calendly" />
        </SectionContent>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <FormContact />
      </div>
    </div>
  </Section>
)

export default Contact
