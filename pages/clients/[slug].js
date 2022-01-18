import { getAllPostPaths, getSinglePostData } from '../../utils/mdx'
import Layout from '../../components/layout'
import Post from '../../components/post/post'

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePostData('clients', params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostPaths('clients')
  return {
    paths,
    fallback: false,
  }
}

const ClientPost = ({ code, frontmatter }) => {
  return (
    <Layout>
      <Post code={code} frontmatter={frontmatter} />
    </Layout>
  )
}

export default ClientPost
