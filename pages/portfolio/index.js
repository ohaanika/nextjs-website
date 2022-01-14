import { getAllPostData } from '../../utils/mdx'
import Layout from '../../components/layout'
import PostList from '../../components/post/postList'

export const getStaticProps = async () => {
  const posts = getAllPostData('portfolio')
  return {
    props: {
      posts,
    },
  }
}

const PortfolioList = ({ posts }) => (
  <Layout>
    <PostList category="portfolio" posts={posts} />
  </Layout>
)

export default PortfolioList
