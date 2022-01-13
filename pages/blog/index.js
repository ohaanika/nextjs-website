import { getAllPostData } from '../../utils/mdx'
import Layout from '../../components/layout'
import Section from '../../components/section/section'
import PostList from '../../components/post/postList'

export const getStaticProps = async () => {
  const posts = getAllPostData('blog')
  return {
    props: {
      posts,
    },
  }
}

const Blog = ({ posts }) => (
  <Layout>
    <Section id="blog">
      <PostList category="blog" posts={posts} />
    </Section>
  </Layout>
)

export default Blog
