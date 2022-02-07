import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'

const About = () => (
  <Section id="about">
    <SectionHeading>About</SectionHeading>
    <SectionContent>
      <p>We get it. You don't want to be bogged down styling CSS, fixing bugs or buried in documentation. You'd rather hit your next deadline and prepare for the big presentation.</p>
      <p>
        Maybe you are looking to launch an all-in-one analytics tool, add a secure login page, or brainstorm that mission-critical feature for your app. Our team of dedicated software developers and
        consultants collaborate with you to take your ideas to production.
      </p>
    </SectionContent>
  </Section>
)

export default About
