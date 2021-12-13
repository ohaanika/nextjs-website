import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import FormContact from '../components/formContact'
import Callout from '../components/callout'

const Contact = () => (
  <Section id="contact">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <SectionContentBlock 
          heading="Contact Us"
          subheading="Schedule a call for a consulting estimate or send us a message about your next app idea!"
        >
          <div className="row mt-3">
            <Callout label="Schedule a call with us on Calendly >" link="#contact"/>
          </div>
          <div className="row mt-3">
            or
          </div>
          <div className="row mt-3">
            <Callout label="Email us at zyphr.form@gmail.com >" link="mailto:zyphr.form@gmail.com"/>
          </div>
          <div className="row mt-3">
            or
          </div>
          <div className="row mt-3">
            <Callout label="Message us by filling out this form"/>
          </div>
        </SectionContentBlock>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <FormContact/>
      </div>
    </div>
  </Section>
)

export default Contact
