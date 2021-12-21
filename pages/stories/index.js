import Layout from '../../components/layout'
import Section from '../../components/section'
import SectionContentBlock from '../../components/sectionContentBlock'

const Blog = () => (
  <Layout>
    <Section id="stories">
      <div className="row no-gutters">
        <SectionContentBlock heading="Client Stories" />
      </div>
    </Section>
  </Layout>
)

export default Blog
