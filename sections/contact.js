import Section from '../components/section'
import SectionContentBlock from '../components/sectionContentBlock'
import FormContact from '../components/formContact'
import PlaceholderImage from '../components/placeholders/placeholderImage'

const Contact = () => (
  <Section id="contact">
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-12 col-sm-12 pr-lg-5">
        <SectionContentBlock 
          heading="Contact Us"
          subheading="Schedule a call for a consulting estimate or send us a message about your next app idea!"
        >
          <div className="row mt-5">
            <div className="mr-2 flex-shrink-0"><PlaceholderImage ratio={[1,1]} scale={36}/></div>
            <div className="flex-grow-1">
              <h6>Calendly</h6>
              <h6 style={{color: "var(--color-primary)"}}>Schedule a time with us!</h6>
            </div>
          </div>
          <div className="row mt-3">
          <div className="mr-2 flex-shrink-0"><PlaceholderImage ratio={[1,1]} scale={36}/></div>
            <div className="flex-grow-1">
              <h6>Email Address</h6>
              <h6 style={{color: "var(--color-primary)"}}>zyphr.form@gmail.com</h6>
            </div>
          </div>
          <div className="row mt-3">
          <div className="mr-2 flex-shrink-0"><PlaceholderImage ratio={[1,1]} scale={36}/></div>
            <div className="flex-grow-1">
              <h6>Location</h6>
              <h6 style={{color: "var(--color-primary)"}}>Vancouver, Canada</h6>
            </div>
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
