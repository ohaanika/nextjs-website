import { getAllPostData } from '../../utils/mdx'
import Layout from '../../components/layout'
import PostList from '../../components/post/postList'

export const getStaticProps = async () => {
  const posts = getAllPostData('blog')
  return {
    props: {
      posts,
    },
  }
}

const BlogList = ({ posts }) => (
  <Layout>
    <PostList category="blog" posts={posts} />
  </Layout>
)

export default BlogList
