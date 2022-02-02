import Section from '../components/section/section'
import SectionContentBlock from '../components/section/sectionContentBlock'
import HomePortfolioList from '../components/post/homePortfolioList'

const Portfolio = ({ posts }) => (
  <Section id="portfolio">
    <div className="row no-gutters">
      <SectionContentBlock heading="Portfolio" subheading="Check out some of our interactive apps." />
      <HomePortfolioList category="portfolio" posts={posts} />
    </div>
  </Section>
)

export default Portfolio
