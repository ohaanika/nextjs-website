import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import FormContact from '../components/formContact'

const Contact = () => (
  <Section id="contact">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <SectionContentBlock heading="Contact Us">
          <p>
            Placeholder content.
          </p>
        </SectionContentBlock>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <FormContact/>
      </div>
    </div>
  </Section>
)

export default Contact
