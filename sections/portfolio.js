import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'
import HomePortfolioList from '../components/post/homePortfolioList'

const Portfolio = ({ posts }) => (
  <Section id="portfolio">
    <SectionHeading>Portfolio</SectionHeading>
    <SectionContent>
      <p>Check out some of our interactive apps. 🖥</p>
    </SectionContent>
    <HomePortfolioList category="portfolio" posts={posts} />
  </Section>
)

export default Portfolio
