import Layout from "../../components/layout"
import Section from "../../components/section"
import SectionContentBlock from "../../components/sectionContentBlock"

const Blog = () => (
  <Layout>
    <Section id="blog">
      <div className="row no-gutters">
        <SectionContentBlock
          heading="Blog"
        />
      </div>
    </Section>
  </Layout>
)

export default Blog
