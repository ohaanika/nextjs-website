import { getAllPostData } from '../../utils/mdx'
import Layout from '../../components/layout/layout'
import PostList from '../../components/post/postList'

export const getStaticProps = async () => {
  const posts = getAllPostData('clients')
  return {
    props: {
      posts,
    },
  }
}

const ClientList = ({ posts }) => (
  <Layout>
    <PostList category="clients" posts={posts} />
  </Layout>
)

export default ClientList
