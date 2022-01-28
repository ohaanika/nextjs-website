import { getAllPostPaths, getSinglePostData } from '../../utils/mdx'
import Layout from '../../components/layout/layout'
import Post from '../../components/post/post'

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePostData('portfolio', params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostPaths('portfolio')
  return {
    paths,
    fallback: false,
  }
}

const PortfolioPost = ({ code, frontmatter }) => {
  return (
    <Layout>
      <Post code={code} frontmatter={frontmatter} />
    </Layout>
  )
}

export default PortfolioPost
