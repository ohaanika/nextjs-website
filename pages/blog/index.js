import Link from 'next/link'
import { getAllPostData } from '../../utils/mdx'
import Layout from '../../components/layout'
import Section from '../../components/section'
import Date from '../../components/blog/date'

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
      <div>
        <h1>Blog</h1>
        <div>
          {posts.map((post, index) => (
            <div key={index} style={{ margin: '20px 0', lineHeight: 1.5 }}>
              <Link href={`/blog/${post.slug}`}>
                <a style={{ fontSize: '1rem', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none', color: 'var(--color-text)' }}>
                  <p style={{ fontSize: '1.25em', fontWeight: 'var(--font-weight-bold)' }}>{post.frontmatter.title}</p>
                  <p style={{ color: 'var(--color-monotone)' }}>{post.frontmatter.subtitle}</p>
                  <p style={{}}>
                    <Date dateString={post.frontmatter.date} />
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
)

export default Blog
