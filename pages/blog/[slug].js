import { getAllPostPaths, getSinglePostData } from '../../utils/mdx'
import Layout from '../../components/layout/layout'
import Post from '../../components/post/post'

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePostData('blog', params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostPaths('blog')
  return {
    paths,
    fallback: false,
  }
}

const BlogPost = ({ code, frontmatter }) => {
  return (
    <Layout>
      <Post code={code} frontmatter={frontmatter} />
    </Layout>
  )
}

export default BlogPost
