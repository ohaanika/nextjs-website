import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import FormContact from '../components/formContact'
import Callout from '../components/callout'

const Contact = () => (
  <Section id="contact" backgroundColor="var(--color-primary-background)">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <SectionContentBlock 
          heading="Contact Us"
          subheading="Want to work with us? Message us here or book a call to let us know what you have in mind."
        >
          <div className="row mt-3">
            <Callout label="Book a call on Calendly >" link="#contact"/>
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
